const express = require("express");
const { isLoggedIn } = require("../middlewares");
const router = express.Router();
const Comment = require("../models/Comment");

module.exports = router;
