import { gql } from '@apollo/client';

export const basicListUsers = gql`
  query BasicListUsers($limit: Int!) {
    users(data: { limit: $limit }) {
      nodes {
        name
        email
      }
    }
  }
`;
