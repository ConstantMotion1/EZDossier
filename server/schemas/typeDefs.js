const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Portfolio {
    _id: ID
    name: String
    email: String
    password: String
    traits: [String]!
  }

  type Auth {
    token: ID!
    portfolio: Portfolio
  }

  type Query {
    portfolios: [Portfolio]!
    portfolio(portfolioId: ID!): Portfolio
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Portfolio
  }

  type Mutation {
    addPortfolio(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addTrait(portfolioId: ID!, trait: String!): Portfolio
    removePortfolio: Portfolio
    removeTrait(trait: String!): Portfolio
  }
`;

module.exports = typeDefs;