const Cube = require('../models/Cube');
const { generateCubeOptions } = require('../utils/cubeUtils');
const parseMongooseError = require('../utils/mongooseErrors');

function getCreateCube(req, res) {
  res.render('cubes/create');
}

async function postCreateCube(req, res, next) {
  try {
    const { name, description, imageUrl, difficultyLevel } = req.body;
    const creatorId = req.user._id;
    const cube = new Cube({ name, description, imageUrl, difficultyLevel, creatorId });
    await cube.save();
  } catch (error) {
    const errorMessage = parseMongooseError(error)[0];
    return res.render('cubes/create', { error: errorMessage });
  }

  res.redirect('/');
}

async function getDetailsCube(req, res) {
  const cubeId = req.params.cubeId;
  let cube = await Cube.findById(cubeId).populate('accessories').lean();

  let isOwner = false;

  if (req.user) {
    const userId = req.user._id;
    const creatorId = cube.creatorId;
    isOwner = userId === creatorId;
  }

  res.render('cubes/details', { cube, isOwner });
}

async function getEditCube(req, res) {
  const cube = await Cube.findById(req.params.cubeId).lean();
  const difficultyLevel = Number(cube.difficultyLevel);
  const options = generateCubeOptions(difficultyLevel);
  const cubeOwner = cube.creatorId;
  const userId = req.user._id;

  if (cubeOwner !== userId) {
    return res.render('404', { error: 'You are not the owner of the cube!' });
  }

  res.render('cubes/edit', { cube, options });
}

async function postEditCube(req, res) {
  const { name, description, imageUrl, difficultyLevel } = req.body;
  await Cube.findOneAndUpdate({ _id: req.params.cubeId }, { name, description, imageUrl, difficultyLevel });

  res.redirect(`/cubes/details/${req.params.cubeId}`);
}

async function getDeleteCube(req, res) {
  const cube = await Cube.findById(req.params.cubeId).lean();
  const difficultyLevel = cube.difficultyLevel;
  const options = generateCubeOptions(difficultyLevel);

  res.render('cubes/delete', { cube, options });
}

async function postDeleteCube(req, res) {
  await Cube.findByIdAndDelete(req.params.cubeId);

  res.redirect('/');
}

module.exports = {
  getCreateCube,
  postCreateCube,
  getDetailsCube,
  getEditCube,
  postEditCube,
  getDeleteCube,
  postDeleteCube,
};
