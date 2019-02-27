const express = require('express');
const Project = require('../models/Projects')
const parser = require('../configs/cloudinary')
const { isLoggedIn } = require('../middlewares')
const router = express.Router();


router.use((req, res, next) => {
  console.log("DEBUG routes/projects");
  next();
});

// Route to get all projects
router.get("/", (req, res, next) => {
  Project.find()
    .sort({ date: -1 })
    .then(projects => {
      res.json(projects);
    })
    .catch(err => next(err));
});

// Route to add a project
router.post("/", (req, res, next) => {
  let {
    name,
    projectLink,
    description,
    projectImage,
    technologyUsed,
    date
  } = req.body;
  Project.create({
    name,
    projectLink,
    description,
    projectImage,
    technologyUsed,
    date
  })
    .then(projects => {
      res.json({
        success: true,
        projects
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

module.exports = router;
