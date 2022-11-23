const { Schema, model } = require('mongoose');

const portfolioSchema = new Schema({
  portfolioUser: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Portfolio = model('Portfolio', portfolioSchema);

module.exports = Portfolio;