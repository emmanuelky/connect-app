const express = require("express");
const Project = require("../models/Project");
const parser = require("../configs/cloudinary");
const { isLoggedIn } = require("../middlewares");
const router = express.Router();
const mongoose = require('mongoose')

// router.use((req, res, next) => {
//   console.log("DEBUG routes/projects");
//   next();
// });

// Route to get all projects
router.get("/", (req, res, next) => {
  Project.find()
    .sort({ date: -1 })
    .then(projects => {
      res.json(projects);
    })
    .catch(err => next(err));
});

router.get("/byprofile", (req, res, next) => {
  console.log("by", req.user)
  var mongoFilter = {_creator: mongoose.Types.ObjectId(req.user._id)} 
  Project.find(mongoFilter)
    .then(projects => {
      res.json(projects);
    })
    .catch(err => next(err));
});

router.get("/:id", (req, res, next) => {
  // console.log("I m in here");
  Project.findById(req.params.id)
    .populate("_creator", "username") // Just populate the username and the _id (default) of the creator
    .then(projects => {
      res.json(projects);
    })
    .catch(err => next(err));
});

// Route to add a project
router.post("/", parser.single("projectimage"), (req, res, next) => {
  let _creator = req.user._id;
  let { name, projectlink, description, technologyused, date } = req.body;

  let projectimage = req.file.url;

  console.log({
    name,
    projectlink,
    projectimage,
    description,
    technologyused,
    _creator,
    date
  });

  Project.create({
    name,
    projectlink,
    projectimage,
    description,
    technologyused,
    _creator,
    date
  })
    .then(project => {
      res.json({
        success: true,
        project
      });
    })
    .catch(err => next(err));
});

// Route to delete a project
router.delete("/:id", (req, res, next) => {
  Project.findById(req.params.id)
    .then(projects => projects.remove().then(() => res.json({ success: true })))
    .catch(err => next(err));
});

router.get("/projects", (req, res, next) => {
  console.log("HELLO FROM PROJECTS");
  console.log("HELOOOOOOO");
  res.json({ test: "test" });
});

module.exports = router;
