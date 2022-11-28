const { AuthenticationError } = require('apollo-server-express');
const { Portfolio } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    portfolios: async () => {
      return Portfolio.find();
    },

    portfolio: async (parent, { portfolioId }) => {
      return Portfolio.findOne({ _id: portfolioId });
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return Portfolio.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addPortfolio: async (parent, { name, email, password }) => {
      const portfolio = await Portfolio.create({ name, email, password });
      const token = signToken(portfolio);

      return { token, profile };
    },
    login: async (parent, { email, password }) => {
      const portfolio = await Portfolio.findOne({ email });

      if (!portfolio) {
        throw new AuthenticationError('No portfolio with this email found!');
      }

      const correctPw = await portfolio.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(portfolio);
      return { token, portfolio };
    },

    // Add a third argument to the resolver to access data in our `context`
    addTrait: async (parent, { portfolioId, trait }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        return Portfolio.findOneAndUpdate(
          { _id: portfolioId },
          {
            $addToSet: { traits: trait },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },  
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removePortfolio: async (parent, args, context) => {
      if (context.user) {
        return Portfolio.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a trait from their own portfolio
    removeTrait: async (parent, { skill }, context) => {
      if (context.user) {
        return Portfolio.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { traits: trait } },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;