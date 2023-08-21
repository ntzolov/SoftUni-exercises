const Cube = require('../models/Cube');

function getCreateCube(req, res) {
  res.render('cubes/create');
}

async function postCreateCube(req, res) {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  const cube = new Cube({ name, description, imageUrl, difficultyLevel });
  await cube.save();
  res.redirect('/');
}

async function getDetailsCube(req, res) {
  const cubeId = req.params.cubeId;
  let cube = await Cube.findById(cubeId).populate('accessories').lean();
  res.render('cubes/details', cube);
}

module.exports = {
  getCreateCube,
  postCreateCube,
  getDetailsCube,
};
