const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    _project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project"
    },
    _creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    text: {
      type: String,
      required: true,
      minlength: 1
    }
  },
  {
    timestamps: {
      createdAt: "createdAt"
    }
  }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
