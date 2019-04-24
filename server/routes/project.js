const express = require("express");
const Project = require("../models/Project");
const parser = require("../configs/cloudinary");
const { isLoggedIn } = require("../middlewares");
const router = express.Router();
const mongoose = require("mongoose");

// Route to get all projects
router.get("/", (req, res, next) => {
  console.log("I am listing all the projects");
  Project.find()
    .sort({ date: -1 })
    .then(projects => {
      res.json(projects);
    })
    .catch(err => next(err));
});

router.get("/byprofile", isLoggedIn, (req, res, next) => {
  let mongoFilter = { _creator: mongoose.Types.ObjectId(req.user._id) };
  Project.find(mongoFilter)
  .sort({ date: -1 })
   .then(projects => {
      res.json(projects);
    })
    .catch(err => next(err));
});

// router.post("/project", (req, res) => {
//   var comment = new Comment();
//   comment._commentcreator = req.body._commentcreator;
//   comment.text = req.body.text;
//   comment.save(function(err) {
//     if (err) res.send(err);
//     res.json({ message: "Comment successfully added!" });
//   });
// });

router.get("/:id", (req, res, next) => {
  // console.log("I m in here");
  Project.findById(req.params.id)
    .populate("_creator", "username") // Just populate the username and the _id (default) of the creator
    .then(projects => {
      res.json(projects);
    })
    .catch(err => next(err));
});

// Route to edit a project
router.put("/:id", (req, res, next) => {
  let {
    username,
    name,
    description,
    projectlink,
    githublink,
    projectimage,
    technologyused
  } = req.body;

  Project.findByIdAndUpdate(
    req.params.id,
    {
      username,
      name,
      description,
      projectlink,
      githublink,
      projectimage,
      technologyused
    },
    { new: true }
  ) // To access the updated country (and not the old country)
    .then(project => {
      res.json({
        message: "Your project has been updated",
        country: project
      });
    })
    .catch(err => next(err));
});
// Route to add a project
router.post(
  "/",
  isLoggedIn,
  parser.single("projectimage"),
  (req, res, next) => {
    let username = req.user.username;
    let _creator = req.user._id;
    let {
      name,
      projectlink,
      githublink,
      description,
      technologyused
    } = req.body;
    let date = new Date();

    let projectimage = req.file.url;

    Project.create({
      username,
      name,
      projectlink,
      githublink,
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
  }
);

// Route to delete a project
router.delete("/:id", (req, res, next) => {
  Project.findByIdAndDelete(req.params.id)
    .then(projects => {
      res.json({
        message: "The projects was deleted",
        projects: projects // The deleted projects are sent
      });
    })
    .catch(err => next(err));
});

module.exports = router;
