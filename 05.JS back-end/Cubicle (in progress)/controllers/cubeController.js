const Cube = require('../models/Cube');
const database = require('../config/database');
function getCreateCube(req, res) {
  res.render('create');
}

function postCreateCube(req, res) {
  const cube = new Cube(req.body);
  cube.save();
  res.redirect('/');
}

function getDetailsCube(req, res) {
  const cubeId = req.params.cubeId;
  let currCube = database.find((cube) => cube.id === cubeId);
  res.render('details', currCube);
}

module.exports = {
  getCreateCube,
  postCreateCube,
  getDetailsCube,
};
