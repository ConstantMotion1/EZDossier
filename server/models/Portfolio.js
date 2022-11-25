const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const portfolioSchema = new Schema({
  portfolioUser: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  information: [
  {
      title: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      project: {
        type: String,
      },
      description: {
        type: String,
        minlength: 1,
        maxlength: 280,
      },
      resume: {
        type: String,
      },
      navigation: {
        type: String,
      },
    },
  ],
});

const Portfolio = model('Portfolio', portfolioSchema);

module.exports = Portfolio;