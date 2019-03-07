const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: false
    },
    lastname: {
      type: String,
      required: false
    },
    username: {
      type: String,
      minlength: 1
    },
    password: {
      type: String
    },
    profileimage: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email address"
      ]
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
      required: false
    },
    state: {
      type: String,
      required: false
    },
    city: {
      type: String,
      required: false
    },
    specialization: {
      type: String,
      required: false
    },
    status: {
      type: String,
      enum: ["alumni", "student", "employer", "Student", "Alumni"]
    },
    age: {
      type: Number,
      required: false
    },
    gender: {
      type: String,
      enum: ["male", "female", "Male", "Female"]
    },
    social: {
      type: String,
      default: []
    }
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
