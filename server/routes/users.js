const express = require("express");
const { isLoggedIn } = require("../middlewares");
const router = express.Router();
const User = require("../models/User.js");

router.get("/users", isLoggedIn, (req, res, next) => {
  User.find({}).then(users => {
    res.json(users);
  });
});

module.exports = router;
