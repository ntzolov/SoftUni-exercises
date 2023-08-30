function parseMongooseError(err) {
  const errors = Object.keys(err.errors).map((key) => err.errors[key].message);

  return errors;
}

module.exports = parseMongooseError;
