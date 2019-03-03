const express = require("express");
const Project = require("../models/Project");
const parser = require("../configs/cloudinary");
const { isLoggedIn } = require("../middlewares");
const router = express.Router();
const mongoose = require("mongoose");

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
  console.log("by", req.user);
  let mongoFilter = { _creator: mongoose.Types.ObjectId(req.user._id) };
  Project.find(mongoFilter)
    .sort({ date: -1 })
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

router.get("/byprofile", (req, res, next) => {
  res.json(req.user);
});

router.post("/edit-project", (req, res, next) => {
  let projectId = req.user._id;
  let {
    username,
    name,
    projectlink,
    githublink,
    projectimage,
    description,
    technologyused
  } = req.body;

  Project.update({
    username,
    name,
    projectlink,
    githublink,
    projectimage,
    description,
    technologyused
  })

    .then(user => {
      res.json({
        success: true,
        user
      });
      response.redirect("/");
    })
    .catch(err => next(err));

  console.log("user id is", projectId);
  console.log("user body is", req.body);
});

// Route to add a project
// router.post('/', isLoggedIn, parser.single('projectimage'), (req, res, next) => {
//   let {
//     name,
//     projectlink,
//     description,
//     projectimage,
//     technologyused,
//     date
//   } = req.body;

//   let _creator = req.user._id // req.user contains information about the connected user
// let projectimage = req.file.url
//   Project.create({
//     name,
//     projectlink,
//     description,
//     projectimage,
//     technologyused,
//     _creator,
//     date
//   })
//     .then(projects => {
//       res.json({
//         success: true,
//         projects
//       });
//     })
//     .catch(err => next(err));
// });

// Route to add a project
router.post(
  "/",
  isLoggedIn,
  parser.single("projectimage"),
  (req, res, next) => {
    let _creator = req.user._id;
    let {
      username,
      name,
      projectlink,
      githublink,
      description,
      technologyused,
      date
    } = req.body;

    let projectimage = req.file.url;

    console.log({
      username,
      name,
      projectlink,
      githublink,
      projectimage,
      description,
      technologyused,
      _creator,
      date
    });

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
  Project.findById(req.params.id)
    .then(project => project.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

router.get("/projects", (req, res, next) => {
  console.log("HELLO FROM PROJECTS");
  console.log("HELOOOOOOO");
  res.json({ test: "test" });
});

module.exports = router;
