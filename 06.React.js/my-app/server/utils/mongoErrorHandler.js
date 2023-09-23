const mongoErrorHandler = (error) => {
  const errorsArray = Object.entries(error.errors);
  return errorsArray[0][1].message;
};

module.exports = {
  mongoErrorHandler,
};
