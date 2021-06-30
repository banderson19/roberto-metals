import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TICKET = gql`
    mutation addTicket($clientName: String!) {
        addTicket(clientName: $clientName) {
            _id
            clientName
            pickupDate
            materials {
                _id
                materialName
                quantity
            }
        }
    }
`;

export const ADD_MATERIAL = gql `
mutation addMaterial($ticketId: ID!, $materialName: String!, $quantity: Int!) {
  addMaterial(ticketId: $ticketId, materialName: $materialName, quantity: $quantity) {
    _id
    materials {
      _id
      materialName
      quantity
    }
  }
}
`;

// export const ADD_TICKET_AND_MATERIAL = gql `
// mutation addTicketAndMaterial($clientName: String!, $ticketId: ID, $materialName: String!, $quantity: Int!) {
//   addTicketAndMaterial(clientName: $clientName, ticketId: $ticketId, materialName: $materialName, quantity: $quantity) {
//     _id
//     clientName
//     materials {
//       _id
//       materialName
//       quantity
//     }
//   }
// }
// `