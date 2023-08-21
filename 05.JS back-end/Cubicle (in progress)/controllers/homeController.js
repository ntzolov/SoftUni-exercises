let Cube = require('../models/Cube');

async function getHomePage(req, res) {
  let { search, from, to } = req.query;

  const regex = new RegExp(search, 'i');

  let options = {
    name: { $regex: regex },
    difficultyLevel: {},
  };

  if (from) {
    options.difficultyLevel.$gte = Number(from);
  }

  if (to) {
    options.difficultyLevel.$lte = Number(to);
  }

  let cubes = await Cube.find(options).lean();

  res.render('index', { cubes, search, from, to });
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
