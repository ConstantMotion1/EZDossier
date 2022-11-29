const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Profile {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    traits: [Trait]
  }

  type Trait {
    _id: ID
    title: String
    fullName: String
    description: String
    resume: String
    contact: String
    image: String
    background: String
    projects: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addTrait(title: String, fullName: String, description: String, resume: String, contact: String, image: String, background: String, projects: String): Profile
    removeProfile: Profile
    removeTrait(trait: String!): Profile
  }
`;

module.exports = typeDefs;