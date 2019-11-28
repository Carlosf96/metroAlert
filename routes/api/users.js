const express = require("express");
const router = express.Router();
const controller = require('../../controllers/Users.controller')
/**
 * 
 @Post to api/users/register
 @Register user
 @Access public
 */
router
  .route("/register")
  .post(controller.register)
/** 
 @Post to api/users/login
 @Login user and return JWT
 @Access public
 */
router
  .route("/login")
  .post(controller.login);

module.exports = router;