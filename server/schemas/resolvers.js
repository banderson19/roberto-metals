const { AuthenticationError } = require("apollo-server-express");
const { Client, Ticket, User, Material} = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('thoughts')
            .populate('friends');
      
          return userData;
        }
      
        throw new AuthenticationError('Not logged in');
      },
      users: async () => {
        return User.find()
          .populate('users')
      },
      // get all clients
      clients: async () => {
        return Client.find()
        // .sort({ createdAt: -1 });
          .populate('tickets')
      },
      // get a single client
      client: async (parent, {clientName}) => {
        return Client.findOne({ clientName }) 
          .populate('tickets')
      },
      tickets: async (parent, {clientName}) => {
        const params = clientName ? {clientName} : {};
        return Ticket.find(params).sort({ createAt: -1 });
      },
      ticket: async (parent, { _id }) => {
        return Ticket.findOne({ _id });
      }
    },
    Mutation: {
      addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user };
      },
      login: async(parent, { email, password }) => {
        const user = await User.findOne({ email });

        if (!user) {
          throw new AuthenticationError('Incorrect username');
        } 
        // console.log(password)
        // const correctPw = await user.methods.isCorrectPassword(password);

        // if(!correctPw) {
        //   throw new AuthenticationError('Incorrect password');
        // }

        // ***** fix bug here **** 
        if(!password) {
          throw new AuthenticationError('Incorrect password');
        }
        const token = signToken(user);
        return { token, user };
      },

      addClient: async (parent, args) => {
        const client = await Client.create(args);

        return client;
      },
      // adds ticket to 
      addTicket: async (parent, args, context) => {
        // console.log(context.user)
        // if (context.user) {
          // const ticket = await Ticket.create({ ...args, userName: context.user.userName});
          const ticket = await Ticket.create({ ...args});
          console.log(args)
          // console.log('context', context.user)
          // await Ticket.findOneAndUpdate(
          //   {_id: ticket._id},
          //   { $push: { tickets: ticket._id }},
          //   { new: true }
          // );
            
          return ticket;
        // }

        // throw new AuthenticationError('You need to be logged in!')
      },
      deleteTicket: async (parent, {ticketId} ) => {
        const deleteTicket = await Ticket.deleteOne(
          {_id: ticketId}
        )
        return deleteTicket
      },
      addMaterial: async (parent, { ticketId, materialName, quantity }) => {
          const updatedTicket = await Ticket.findOneAndUpdate(
            { _id: ticketId },
            { $push: { materials: { materialName, quantity } } },
            { new: true, runValidators: true }
          );
          console.log(materialName, quantity)
          return updatedTicket;
        
        // throw new AuthenticationError('You need to be logged in!')
      },
      deleteMaterial: async(parent, args) => {
        console.log(args)
        const updateTicket = await Ticket.findOneAndUpdate(
          {_id: args.ticketId},
          {$pull: { materials: { _id: args.materialId}}},
          { new: true } 
        )
        console.log('material deleted')
        return updateTicket;
      } 
    }
  };
  
  module.exports = resolvers;