// const { UserInputError } = require("apollo-server-express");
const { Client } = require('../models')

const resolvers = {
    Query: {
      clients: async () => {
        return Client.find().sort({ createdAt: -1 });
      }
    }
  };
  
  module.exports = resolvers;