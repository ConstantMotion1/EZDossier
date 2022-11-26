const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
project: {
        title: {
            type: String,
            required: true,
        },
        github: {
            type: String,
        },
        website: {
            type: String,
        },
    },
});
  
  const Project = model('Project', projectSchema);
  
  module.exports = Project;