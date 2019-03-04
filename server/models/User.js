const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true,
      minlength: 1,
    },
    password: {
      type: String,
      required: true,
      
    },
    profileimage: {
      type: String,
      required: true
    },
    email: {
      type: String, 
      required: true, 
      unique: true, 
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address'] 
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
        enum: ["alumni", "student", "employer"],
      },
    age: {
      type: Number,
      required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
      },
    social: {
      type: [String],
      default: []
      },
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
