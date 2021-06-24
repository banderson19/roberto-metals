import { gql } from '@apollo/client';

export const QUERY_TICKETS = gql `
    query tickets($clientName: String) {
        tickets(clientName: $clientName) {
            _id
            clientName
            materials {
                _id
                materialName
                quantity
            }
        }
    }
`