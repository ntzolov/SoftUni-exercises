const mongoErrorHandler = (error) => {
  if (error.errors) {
    const errorsArray = Object.entries(error.errors);
    return errorsArray[0][1].message;
  }

  return error;
};

module.exports = {
  mongoErrorHandler,
};
