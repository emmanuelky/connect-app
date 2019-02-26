const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    university: {
      type: String,
      required: false
    },
    institute: {
      type: String,
      required: false
    },
    country: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    specialization: {
      type: String,
      required: true
    },
    status: {
        type: String,
        enum: ["alumni", "student"],
      },
    age: {
      type: Number,
      required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
      },
    social: [{
        type: String,
        url: String,
      }],
    },

  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
