// const { UserInputError } = require("apollo-server-express");
const { Client, Ticket } = require('../models')


const resolvers = {
    Query: {
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
    }
  };
  
  module.exports = resolvers;