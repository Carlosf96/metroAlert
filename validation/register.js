//pull dependencies
const Validator = require("validator");
const isEmpty = require("is-empty");
//export a function which takes in data sent from reg form(frontend) and validates user register input
module.exports = function validateRegisterInput(data) {
  let errors = {};

  //first coerce all empty input fields to empty string so validator can sanitize
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  //now our function will do a name check
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  //email check
  if (Validator.isEmpty(data.email)) {
    errors.email = "Please enter an email";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  //password check
  if (Validator.isEmpty(data.password)) {
    //check if the password field is empty
    errors.password = "Please enter a password";
  }
  if (Validator.isEmpty(data.password2)) {
    //check to see if the confirm passworld field is empty
    errors.password2 = "Please confirm password";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 16 })) {
    //check if the password length matches the predefined length config
    errors.password = "Password must be at least 6 characters long";
  } //currently not working
  //TODO:Fix length Validator
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }
  return {
    //return our errors obj and
    errors,
    isValid: isEmpty(errors)
  };
};
