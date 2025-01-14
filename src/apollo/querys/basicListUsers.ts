import { gql } from '@apollo/client';

export const GET_BASIC_USERS = gql`
  query BasicListUsers($limit: Int!) {
    users(data: { limit: $limit }) {
      nodes {
        name
        email
      }
    }
  }
`;
