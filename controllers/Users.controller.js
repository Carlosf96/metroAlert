const User = require("../models/User");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const keys = require("../config/keys");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
module.exports = {
  register: (req, res) => {
    const {body, body: { name, email, password}} = req;
    const { errors, isValid } = validateRegisterInput(body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({
      email: email
    }).then(user => {
      if (user) {
        console.log("email exists");
        return res.status(400).json({
          email: "Email already exists"
        });
      }
      const newUser = new User({
        name: name,
        email: email,
        password: password
      });
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
  },
  login: (req, res) => {
    const {body, body: { email, password}} = req;
    const { errors, isValid } = validateLoginInput(body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({
      email
    }).then(user => {
      if (!user) {
        return res.status(404).json({
          emailNotFound: "Email not found"
        });
      }
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          console.log("password has matched");
          const payload = {
            id: user.id,
            name: user.name
          };
          jwt.sign(
            payload,
            keys.secretOrKey,
            {
              expiresIn: 15780000 // 6 months in seconds
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
  }
};