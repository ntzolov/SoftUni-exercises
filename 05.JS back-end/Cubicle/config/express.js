const express = require('express');
const handlebars = require('express-handlebars');
const { authConfirmation } = require('../middlewares/authMiddleware');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const errorHandler = require('../middlewares/errorHandlerMiddleware');

module.exports = (app) => {
  app.engine(
    'hbs',
    handlebars.engine({
      extname: 'hbs',
    })
  );
  app.set('view engine', 'hbs');

  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static('public'));
  app.use(authConfirmation);
  app.use(routes);
  app.use(errorHandler);
};
