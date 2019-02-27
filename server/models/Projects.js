const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: [true, "The project name is required"],
    minlength: 1,
    required: true
  },
  projectlink: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  projectimage: {
    type: String,
  },
  technologyused: {
    type: [String],
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
