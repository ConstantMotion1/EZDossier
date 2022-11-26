const { Schema, model } = require('mongoose');

const informationSchema = new Schema({
    information: {
        title: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            minlength: 1,
            maxlength: 280,
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
        projects: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Project'
            }
        ]   
    },
});
  
  const Information = model('Information', informationSchema);
  
  module.exports = Information;