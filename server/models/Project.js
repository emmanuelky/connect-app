const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The project name is required"],
    minlength: 1,
    required: true
  },
  projectLink: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  projectImage: {
    type: String,
    url: String
  },
  technologyUsed: {
    type: [],
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
