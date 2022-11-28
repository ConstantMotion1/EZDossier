const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const portfolioSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  traits: [
    {
      type: String,
      trim: true,
    },
  ],
});

// set up pre-save middleware to create password
portfolioSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
portfolioSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const Portfolio = model('Portfolio', portfolioSchema);

module.exports = Portfolio;