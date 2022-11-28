const db = require('../config/connection');
const { Profile, Trait } = require('../models');
const profileSeeds = require('./profileSeeds.json');
const traitSeeds = require('./traitSeeds.json');

db.once('open', async () => {
  try {
    await Trait.deleteMany({});
    await Profile.deleteMany({});

    await Profile.create(profileSeeds);

 for (let i = 0; i < traitSeeds.length; i++) {
      const { _id, fullName } = await Trait.create(traitSeeds[i]);
      const profile = await Profile.findOneAndUpdate(
        { username: fullName },
        {
          $addToSet: {
            traits: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});