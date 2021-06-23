// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Client {
    _id: ID
    clientName: String
}

type Query {
    clients: [Client]
}
`;

// export the typeDefs
module.exports = typeDefs;
