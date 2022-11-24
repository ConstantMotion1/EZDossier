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
    informations: [Information]!
  }

  type Information {
    _id: ID
    title: String
    name: String
    project: String
    description: String
    resume: String
    navigation: String
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
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPortfolio(portfolioUser: String!): Portfolio
    addInformation(portfolioId: ID!, description: String!): Portfolio
    removePortfolio(portfolioId: ID!): Portfolio
    removeInformation(portfolioId: ID!, informationId: ID!): Portfolio
}
`;

module.exports = typeDefs;