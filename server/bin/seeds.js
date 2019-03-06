// Seeds file that remove all users and create 2 new users

// To execute this seed, run from the root of the project
// $ node bin/seeds.js

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Comment = require("../models/Comment");

const bcryptSalt = 10;

require("../configs/database");

let comments = [
  {
    _commentcreator: "5c76df4132c80b1f5b98040f",
    text: "Comment 1"
  },
  {
    _commentcreator: "5c76dfae32c80b1f5b980410",
    text: "Comment 2"
  }
];

Comment.deleteMany()
  .then(() => {
    return Comment.create(comments);
  })
  .then(x => {
    console.log(`${x.length} comments created with the following id:`);
    console.log(x.map(y => y._id));
  })
  .then(() => {
    // Close properly the connection to Mongoose
    mongoose.disconnect();
  })
  .catch(err => {
    mongoose.disconnect();
    throw err;
  });
