//setup api routes
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs"); //Needed for password hashing
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

//load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
//load user model
const User = require("../../models/User");
//post to api/users/register
//register user
//access public
router.post("/register", (req, res) => {
  //form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  //email check
  User.findOne({
    email: req.body.email
  }).then(user => {
    if (user) {
      console.log("email exists");
      return res.status(400).json({
        email: "Email already exists"
      });
    }
    //create new user obj
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    //hash pass before storing in db
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      });
    });
  });
});
//post to api/users/login
//login user and return JWT
//access public
router.post("/login", (req, res) => {
  //form validation
  const { errors, isValid } = validateLoginInput(req.body);
  //check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  //find user by email
  User.findOne({
    email
  }).then(user => {
    //check if user exists
    if (!user) {
      return res.status(404).json({
        emailNotFound: "Email not found"
      });
    }

    //check pass
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        //check if match
        //User Matched
        console.log("User has matched");
        //create JWT payload
        const payload = {
          id: user.id,
          name: user.name
        };
        //sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 15780000 //6 months in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res.status(404).json({
          passwordIncorrect: "Password incorrect"
        });
      }
    });
  });
});

module.exports = router;
