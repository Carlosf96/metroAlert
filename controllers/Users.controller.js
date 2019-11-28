const User = require("../models/User");
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");
const keys = require("../config/keys");
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken");
module.exports = {
  register: (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    User.findOne({
      email: req.body.email
    }).then(user => {
      if (user) {
        console.log("email exists");
        return res.status(400).json({
          email: "Email already exists"
        });
      }
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      // Hash pass before storing in db
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
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
      return res.status(400).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    // Find user by email
    User.findOne({
      email
    }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({
          emailNotFound: "Email not found"
        });
      }
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          console.log("password has matched");
          // Create JWT payload
          const payload = {
            id: user.id,
            name: user.name
          };
          // Sign token
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
  },
}