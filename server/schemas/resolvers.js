const { AuthenticationError } = require('apollo-server-express');
const { User, Portfolio } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      // users: async () => {
      //   return User.find().populate('portfolios');
      // },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('portfolios');
      },
      portfolios: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Portfolio.find(params).sort({ createdAt: -1 });
      },
      // portfolio: async (parent, { portfolioId }) => {
      //   return Portfolio.findOne({ _id: portfolioId });
      // },
    },
  
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No user found with this email address');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
      addPortfolio: async (parent, {  portfolioUser }) => {
        const portfolio = await Portfolio.create({ portfolioUser });
  
        await User.findOneAndUpdate(
          { username: portfolioUser },
          { $addToSet: { portfolios: portfolio._id } }
        );
  
        return portfolio;
      },
      removePortfolio: async (parent, { portfolioId }) => {
        return Portfolio.findOneAndDelete({ _id: portfolioId });
      },
    },
  };

module.exports = resolvers;