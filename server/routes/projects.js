const express = require('express');
const Project = require('../models/Project')
const router = express.Router();


router.use((req, res, next) => {
  console.log('DEBUG routes/projects');
  next()
})

// Route to get all projects
router.get('/', (req, res, next) => {
  Project.find()
    .then(projects => {
      res.json(projects);
    })
    .catch(err => next(err))
});

// router.get('/projects', (req, res, next) => {
//   Project.findById(req.params.id)
//     .then(project => {
//       res.json(project);
//     })
//     .catch(err => next(err))
// });

router.get('/:id', (req, res, next) => {
  Project.findById(req.params.id)
    .then(project => {
      res.json(project);
    })
    .catch(err => next(err))
});



// Route to add a project
router.post('/add-project', (req, res, next) => {
  let _owner = req.user._id
  let { name, projectlink, projectimage, description, technologyUsed  } = req.body
  Project.create({name, 
    projectlink, 
    projectimage, 
    description, 
    technologyUsed, 
    _owner 
  })
    .then(project => {
      res.json({
        success: true,
        project
      });
    })
    .catch(err => next(err))
});

// // The route is delete 
// router.delete('/:id', (req,res,next)=>{
//   Project.findByIdAndDelete(req.params.id)
//     .then(project => {
//       res.json({
//         message: "The project was deleted",
//         project: project // The deleted country is sent
//       })
//     })
//     .catch(err => next(err))
// })

// // The route is PUT /api/projects/:id

// router.put('/:id', (req,res,next)=>{
//   Project.findByIdAndUpdate(req.params.id, {
//     name: req.body.name,
//     projectlink: req.body.projectlink,
//     description: req.body.description,
//     technologyUsed: req.body.technologyUsed,
//   }, { new: true }) // To access the updated country (and not the old country)
//     .then(project => {
//       res.json({
//         message: "The project has been updated",
//         project: project
//       })
//     })
//     .catch(err => next(err))
// })



module.exports = router;
