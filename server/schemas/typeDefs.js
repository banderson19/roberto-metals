// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Client {
    _id: ID
    clientName: String
}
type Ticket {
    _id: ID
    clientName: String
    materialCount: Int
    materials: [Material]
}
type Material {
    _id: ID
    materialName: String
    quantity: Int
}

type Query {
    clients: [Client]
    client(clientName: String!): Client
    tickets(clientName: String): [Ticket]
    ticket(_id: ID!): Ticket
}
`;

// export the typeDefs
module.exports = typeDefs;
