const db = require('../config/connection');
const { Portfolio } = require('../models');
const portfolioSeeds = require('./portfolioSeeds.json');

db.once('open', async () => {
  try {
    await Portfolio.deleteMany({});
    await Portfolio.create(portfolioSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});