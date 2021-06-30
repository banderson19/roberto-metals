// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql` 

type User {
    _id: ID
    userName: String
    email: String
}
type Client {
    _id: ID
    clientName: String
}
type Ticket {
    _id: ID
    clientName: String
    pickupDate: String
    materialCount: Int
    materials: [Material]
}
type Material {
    _id: ID
    materialName: String
    quantity: Int
}
type Auth {
    token: ID!
    user: User
  }

type Query {
    me: User
    users: [User]
    clients: [Client]
    client(clientName: String!): Client
    tickets(clientName: String): [Ticket]
    ticket(_id: ID!): Ticket
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String!): Auth
    addClient(clientName: String!): Client
    addTicket(clientName: String!): Ticket
    addMaterial(ticketId: ID!, materialName: String!, quantity: Int!): Ticket
}

`;

// export the typeDefs
module.exports = typeDefs;
// addTicketAndMaterial(clientName: String!, ticketId: ID!, materialName: String!, quantity: Int! ): Ticket
