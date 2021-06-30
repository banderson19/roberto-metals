import { gql } from '@apollo/client';

export const QUERY_TICKETS = gql `
    query tickets($clientName: String) {
        tickets(clientName: $clientName) {
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

export const QUERY_TICKET = gql`
  query ticket($id: ID!) {
    ticket(_id: $id) {
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

export const QUERY_MATERIAL = gql `
  query materials($id: ID!) {
    materials( _id: $id) {
      _id
      materialName
      quantity
    }
  }
`

export const QUERY_CLIENT = gql`
  query client($clientName: String!) {
    client(clientName: $clientName) {
      _id
      clientName
    }
  }
`;