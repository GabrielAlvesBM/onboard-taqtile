import { gql } from '@apollo/client';

export const GET_BASIC_USERS = gql`
  query BasicListUsers($offset: Int!, $limit: Int!) {
    users(data: { offset: $offset, limit: $limit }) {
      nodes {
        name
        email
      }
    }
  }
`;
