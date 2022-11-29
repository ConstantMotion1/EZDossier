import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query Me {
  me {
    _id
    email
    name
    password
    traits {
      _id
      background
      contact
      description
      fullName
      image
      projects
      resume
      title
    }
  }
}
  `;

