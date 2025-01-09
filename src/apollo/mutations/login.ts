import { gql } from '@apollo/client';

export const MutationLogin = gql`
  mutation Login($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;
