const express = require('express');
const handlebars = require('express-handlebars');

module.exports = (app) => {
  app.engine(
    'hbs',
    handlebars.engine({
      extname: 'hbs',
    })
  );
  app.set('view engine', 'hbs');

  app.use(express.urlencoded({ extended: false }));
  app.use(express.static('public'));
};
