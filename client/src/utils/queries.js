import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
      _id
      username
      email
      portfolios {
        _id
        portfolioUser
        createdAt
        informations {
          _id
          title
          name
          description
          resume
          contact
          image
          background
          projects {
            title
            github
            website
          }
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
      informations {
        _id
        title
        name
        description
        resume
        contact
        image
        background
        projects {
          title
          github
          website
        }
      }
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
        informations {
          _id
          title
          name
          description
          resume
          contact
          image
          background
          projects {
            title
            github
            website
          }
        }
      }
    }
  `;

