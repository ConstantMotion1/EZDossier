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
  informations: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Information'
    }
] 
});

const Portfolio = model('Portfolio', portfolioSchema);

module.exports = Portfolio;