const mongoose = require('mongoose');

exports.errorHandler = (error) => {
  if (error instanceof mongoose.MongooseError) {
    const errors = Object.keys(error.errors).map((key) => error.errors[key].message);
    return errors[0];
  }

  return error.message;
};
