const mongoose = require('mongoose');

const TechnologySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The technology name is required'],
    minlength: 1
  },
  
});

const Technology = mongoose.model('Technology', TechnologySchema);

module.exports = Technology;