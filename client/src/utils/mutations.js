import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addProfile($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
      password
    }
  }
`;

export const USER_LOGIN = gql`
  mutation userLogin($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      _id
      username
      password
    }
  }
`;

export const ADD_PORTFOLIO = gql`
  mutation addPortfolio($portfolioUser: String!) {
    addPortfolio(portfolioUser: $portfolioUser) {
      _id
      portfolioUser
      createdAt
    }
  }
`;

export const DELETE_PORTFOLIO = gql`
  mutation deleteUser($portfolioID: ID!) {
    removePortfolio(id: $id) {
      _id
      portfolioUser
      createdAt
    }
  }
`;