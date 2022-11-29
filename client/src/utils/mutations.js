import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addProfile(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    profile {
      _id
    }
  }
}
`;

export const USER_LOGIN = gql`
mutation Mutation($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    profile {
      _id
    }
  }
}
`;

export const ADD_PORTFOLIO = gql`
mutation AddTrait($title: String, $fullName: String, $description: String, $resume: String, $contact: String, $image: String, $background: String, $projects: String) {
  addTrait(title: $title, fullName: $fullName, description: $description, resume: $resume, contact: $contact, image: $image, background: $background, projects: $projects) {
    _id
  }
}
`;

export const DELETE_PORTFOLIO = gql`
mutation AddTrait($trait: String!) {
  removeTrait(trait: $trait) {
    _id
  }
}
`;