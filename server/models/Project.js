const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The project name is required"],
    minlength: 1,
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
    url: String
  },
  technologyUsed: {
    type: [],
    required: true
  }
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
