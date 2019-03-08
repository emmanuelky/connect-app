const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  username: {
    type: String,
    required: true,
    minlength: 1
  },
  name: {
    type: String,
    required: [true, "The project name is required"],
    minlength: 1
  },
  projectlink: {
    type: String,
    required: true
  },

  githublink: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },
  projectimage: {
    type: String
  },
  technologyused: {
    type: [String],
    default: []
  },
  date: {
    type: Date,
    default: Date.now()
  },
  nbOfLikes: { type: Number, default: 0 }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
