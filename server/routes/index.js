const express = require('express');
const { isLoggedIn } = require('../middlewares')
const router = express.Router();

router.get('/secret', isLoggedIn, (req, res, next) => {
  res.json({
    secret: '',
    user: req.user
  });
});

module.exports = router;
