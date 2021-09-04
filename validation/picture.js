const isEmpty = require('./is-empty');

module.exports = function validatePictureInput(data) {
  let errors = {};

  if (isEmpty(data.title)) {
    errors.title = 'Caption field is required';
  }

  if (isEmpty(data.url)) {
    errors.url = 'Picture URL field is required';
  }

  // if (isEmpty(data.taken)) {
  //   errors.taken = 'Taken date field is required';
  // }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
