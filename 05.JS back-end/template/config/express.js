const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const { authMiddleware } = require('../middlewares/authMiddleware');
const port = 5000;

module.exports = (app) => {
  app.engine(
    'hbs',
    handlebars.engine({
      extname: 'hbs',
    })
  );
  app.set('view engine', 'hbs');

  app.use(express.static('public'));
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(authMiddleware);
  app.use(routes);

  app.listen(port, () => console.log(`Server is listening on port ${port}...`));
};
