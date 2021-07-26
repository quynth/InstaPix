const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
  let errors ={};

  if (!Validator.isLength(data.name, {min:3, max:30})){
    errors.name = 'Name must be between 3 and 30 characters';
  }
  if (isEmpty(data.name)){
    errors.name = 'Name is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

