import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query findUser {
    users {
      _id
      username
      portfolios
    }
  }
`;

// work in progress
export const QUERY_PORTFOLIO = gql`
  query findPortfolio {
    portfolios {
      _id
      username
      portfolios
    }
  }
`;



