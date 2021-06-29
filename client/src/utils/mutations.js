import { gql } from '@apollo/client';

export const ADD_TICKET = gql`
    mutation addTicket($clientName: String!) {
        addTicket(clientName: $clientName) {
        _id
        clientName
        }
    }
`;