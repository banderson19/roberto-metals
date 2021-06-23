const { AuthenticationError } = require("apollo-server-express");
const { Client, Ticket, User} = require('../models');
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
      addUser: async(parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);

        return { token, user};
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
      }
    }
  };
  
  module.exports = resolvers;