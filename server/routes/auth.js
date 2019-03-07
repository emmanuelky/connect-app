const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/User");
const Project = require("../models/Project");
const { isLoggedIn } = require("../middlewares");
const parser = require("../configs/cloudinary");
var LinkedInStrategy = require("passport-linkedin").Strategy;

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

// Linkedin Authentication

passport.use(
  new LinkedInStrategy(
    {
      consumerKey: process.env.LINKEDIN_KEY,
      consumerSecret: process.env.LINKEDIN_SECRET,
      callbackURL: process.env.BACKEND_URI + "/api/login/linkedin/callback",
      profileFields: [
        "id",
        "first-name",
        "last-name",
        "email-address",
        "headline",
        "positions",
        "location",
        "picture-url",
        "picture-urls"
      ]
    },
    function(accessToken, refreshToken, profile, done) {
      console.log("TCL: profile", profile);
      // TODO: take values from the profile and save them in the database
      let email = profile.emails[0].value;
      User.findOne({ email }).then(user => {
        if (user) {
          done(null, user);
        } else {
          User.create({
            email,
            name: profile.displayName,
            profileimage: profile._json.pictureUrl
          }).then(profile => {
            done(null, profile);
          });
        }
      });
    }
  )
);

router.get(
  "/login/linkedin",
  passport.authenticate("linkedin", {
    scope: ["r_basicprofile", "r_emailaddress"]
  })
);

router.get(
  "/login/linkedin/callback",
  passport.authenticate("linkedin", {
    successRedirect: process.env.FRONTEND_URI + "/success-login", // this is probably incorrect
    failureRedirect: "/login"
  })
);
router.post("/signup", parser.single("profileimage"), (req, res, next) => {
  let {
    username,
    password,
    firstname,
    lastname,
    email,
    profileimage,
    university,
    institute,
    country,
    state,
    city,
    specialization,
    status,
    age,
    gender,
    social
  } = req.body;
  profileimage = req.file.url;
  if (!username || !password) {
    res.status(400).json({ message: "Indicate username and password" });
    return;
  }

  console.log({
    username,
    password,
    firstname,
    lastname,
    email,
    profileimage,
    university,
    institute,
    country,
    state,
    city,
    specialization,
    status,
    age,
    gender,
    social
  });

  User.findOne({ username })
    .then(userDoc => {
      if (userDoc !== null) {
        res.status(409).json({ message: "The username already exists" });
        return;
      }
      const salt = bcrypt.genSaltSync(bcryptSalt);
      const hashPass = bcrypt.hashSync(password, salt);
      const newUser = new User({
        username,
        password: hashPass,
        firstname,
        lastname,
        email,
        profileimage,
        university,
        institute,
        country,
        state,
        city,
        specialization,
        status,
        age,
        gender,
        social
      });
      return newUser.save();
    })
    .then(userSaved => {
      // LOG IN THIS USER
      // "req.logIn()" is a Passport method that calls "serializeUser()"
      // (that saves the USER ID in the session)
      req.logIn(userSaved, () => {
        // hide "encryptedPassword" before sending the JSON (it's a security risk)
        userSaved.password = undefined;
        res.json(userSaved);
      });
    })
    .catch(err => next(err));
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  // first check to see if there's a document with that email
  User.findOne({ email })
    .then(userDoc => {
      // "userDoc" will be empty if the email is wrong (no document in database)
      if (!userDoc) {
        // create an error object to send to our error handler with "next()"
        next(new Error("Incorrect email "));
        return;
      }

      // second check the password
      // "compareSync()" will return false if the "password" is wrong
      if (!bcrypt.compareSync(password, userDoc.password)) {
        // create an error object to send to our error handler with "next()"
        next(new Error("Password is wrong"));
        return;
      }

      // LOG IN THIS USER
      // "req.logIn()" is a Passport method that calls "serializeUser()"
      // (that saves the USER ID in the session)
      req.logIn(userDoc, () => {
        // hide "encryptedPassword" before sending the JSON (it's a security risk)
        userDoc.password = undefined;
        res.json(userDoc);
      });
    })
    .catch(err => next(err));
});

/*profile.updateOne(userId, updatedProfile)
.then(function(success){
  console.log("update")
  response.redirect("/");
})
*/

router.get("/logout", (req, res) => {
  req.logout();
  res.json({ message: "You are out!" });
});

module.exports = router;
