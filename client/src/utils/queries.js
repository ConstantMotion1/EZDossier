import { gql } from '@apollo/client';

export const QUERY_USER = gql`
 {
  me {
    _id
    email
    firstName
    lastName
    traits {
      _id
      title
      fullName
      description
      resume
      contact
      image
      background
      projects
    }
  }
}
  `;

