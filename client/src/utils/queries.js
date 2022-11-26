import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
      _id
      username
      email
      portfolios  {
        _id
        portfolioUser
        createdAt
      }
    }
  }
`;

// work in progress
export const QUERY_PORTFOLIO = gql`
  query findPortfolio {
    portfolios {
      _id
      portfolioUser
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      portfolios {
        _id
        portfolioUser
        createdAt
      }
    }
  }
`;

