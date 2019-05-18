const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};
  // convert empty fields to str so the validator can actually validate and sanatize
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  //perform email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter an email";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  //perform password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Please enter a password";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
