const express = require("express");
const { isLoggedIn } = require("../middlewares");
const router = express.Router();
const User = require("../models/User.js");

router.get("/users", isLoggedIn, (req, res, next) => {
  User.find({}).then(users => {
    res.json(users);
  });
});

router.get("/profile", (req, res, next) => {
  res.json(req.user);
});

router.get("/search-profile", (req, res, next) => {
  res.json(req.user);
});

router.get("/search-profile/:firstname", (req, res, next) => {
  User.findOne({ firstname: req.params.firstname })
    .then(user => {
      res.json(user);
    })
    .catch(err => next(err));
});

router.put("/profile", (req, res, next) => {
  let userId = req.user._id;
  let {
    firstname,
    lastname,
    email,
    profileimage,
    university,
    institute,
    country,
    city,
    specialization,
    status,
    age,
    gender,
    social
  } = req.body;

  User.update({
    firstname,
    lastname,
    email,
    profileimage,
    university,
    institute,
    country,
    city,
    specialization,
    status,
    age,
    gender,
    social
  })

    .then(user => {
      res.json({
        success: true,
        user
      });
      response.redirect("/");
    })
    .catch(err => next(err));

  console.log("user id is", userId);
  console.log("user body is", req.body);
});

router.get("/profile/:username", (req, res, next) => {
  User.findOne({ username: req.params.username })
    .then(user => {
      res.json(user);
    })
    .catch(err => next(err));
});

module.exports = router;
