const express = require("express");
const router = express.Router();
const controller = require('../../controllers/Users.controller')

router
  .route("/register")
  .post(controller.register)

router
  .route("/login")
  .post(controller.login);

module.exports = router;