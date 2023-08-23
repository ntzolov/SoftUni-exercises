let Cube = require('../models/Cube');

async function getHomePage(req, res) {
  try {
    let { search, from, to } = req.query;

    const regex = new RegExp(search ? search : '', 'i');

    let options = {
      name: { $regex: regex },
    };

    if (from) {
      options['difficultyLevel'] = {
        $gte: Number(from),
      };
    }

    if (to) {
      options['difficultyLevel'] = {
        $gte: Number(to),
      };
    }

    let cubes = await Cube.find(options).lean();

    res.render('index', { cubes, search, from, to });
  } catch (err) {
    console.log(err.message);
  }
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
