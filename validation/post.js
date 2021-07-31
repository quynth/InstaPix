const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
  let errors = {};

  if (!Validator.isLength(data.image, { min: 10, max: 500 })) {
    errors.image = 'Post must contain image URL';
  }

  if (isEmpty(data.image)) {
    errors.image = 'Image field is required';
  }
  if (!Validator.isLength(data.caption, { min: 1, max: 300 })) {
    errors.caption = 'Caption must be between 1 and 300 characters';
  }

  if (isEmpty(data.caption)) {
    errors.caption = 'Caption field is required';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
