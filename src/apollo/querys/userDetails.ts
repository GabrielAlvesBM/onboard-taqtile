import { gql } from '@apollo/client';

export const GET_USER_DETAILS = gql`
  query userDetails($id: ID) {
    user(id: $id) {
      id
      name
      email
      phone
      birthDate
      role
    }
  }
`;
