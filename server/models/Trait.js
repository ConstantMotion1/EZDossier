const { Schema, model } = require('mongoose');

const traitSchema = new Schema({
    title: {
    type: String,
    },
    fullName: {
    type: String,
    },
    description: {
    type: String,
    },
    resume: {
    type: String,
    },
    contact: {
    type: String,
    },
    image: {
    type: String,
    },
    background: {
    type: String,
    },
    projects: {
    type: String,
    },
});

const Trait = model('Trait', traitSchema);

module.exports = Trait;