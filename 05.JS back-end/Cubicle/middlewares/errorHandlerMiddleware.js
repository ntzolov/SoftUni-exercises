function errorHandler(errorMessage, req, res, next) {
  res.render('404', { errorMessage });
}

module.exports = errorHandler;
