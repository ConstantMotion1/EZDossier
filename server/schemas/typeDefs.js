const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    portfolios: [Portfolio]!
  }

  type Portfolio {
    _id: ID
    portfolioUser: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    portfolios(username: String): [Portfolio]
    portfolio(portfolioId: ID!): Portfolio
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPortfolio(portfolioUser: String!): Portfolio
    removePortfolio(portfolioId: ID!): Portfolio
}
`;

module.exports = typeDefs;