const express = require('express');
const Projects = require('../models/Projects')
const parser = require('../configs/cloudinary')
const { isLoggedIn } = require('../middlewares')
const router = express.Router();


router.use((req, res, next) => {
  console.log("DEBUG routes/projects");
  next();
});

// Route to get all projects
router.get("/", (req, res, next) => {
  Projects.find()
    .sort({ date: -1 })
    .then(projects => {
      res.json(projects);
    })
    .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
  Projects.findById(req.params.id)
    .populate('_creator', 'username') // Just populate the username and the _id (default) of the creator
    .then(projects => {
      res.json(projects);
    })
    .catch(err => next(err))
});

// Route to add a project
router.post('/', isLoggedIn, parser.single('projectimage'), (req, res, next) => {
  let {
    name,
    projectlink,
    description,
    projectimage,
    technologyused,
    date
  } = req.body;

  let _creator = req.user._id // req.user contains information about the connected user
  let projectimage = req.file.url
  Projects.create({
    name,
    projectlink,
    description,
    projectimage,
    technologyused,
    _creator,
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
