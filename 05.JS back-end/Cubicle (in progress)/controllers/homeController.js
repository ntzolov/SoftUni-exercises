let database = require('../config/database');

function getHomePage(req, res) {
  let { search, from, to } = req.query;

  if (search) {
    database = database.filter((cube) => cube.name.toLowerCase().includes(search.toLowerCase()));
  }

  if (from) {
    database = database.filter((cube) => Number(cube.difficultyLevel) >= Number(from));
  }

  if (to) {
    database = database.filter((cube) => Number(cube.difficultyLevel) <= Number(to));
  }

  res.render('index', { database, search, from, to });
}

function getAboutPage(req, res) {
  res.render('about');
}

function get404page(req, res) {
  res.render('404');
}

module.exports = {
  getHomePage,
  getAboutPage,
  get404page,
};
