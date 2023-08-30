const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');
const parseMongooseError = require('../utils/mongooseErrors');

function getAccessoryPage(req, res) {
  res.render('accessories/create');
}

async function postAccessoryPage(req, res, next) {
  try {
    const { name, description, imageUrl } = req.body;
    const accessory = new Accessory({ name, description, imageUrl });
    await accessory.save();
  } catch (error) {
    const errorMessage = parseMongooseError(error)[0];
    return res.render('accessories/create', { error: errorMessage });
  }

  res.redirect('/');
}

async function getAccessories(req, res) {
  const cubeId = req.params.cubeId;
  const cube = await Cube.findById(cubeId).lean();
  const accessories = await Accessory.find({ _id: { $nin: cube.accessories } }).lean();
  res.render('accessories/attach', { accessories, cube });
}

async function postAccessories(req, res) {
  const cube = await Cube.findById(req.params.cubeId);
  cube.accessories.push(req.body.accessory);
  await cube.save();

  res.redirect(`/cubes/details/${req.params.cubeId}`);
}

module.exports = {
  getAccessoryPage,
  postAccessoryPage,
  getAccessories,
  postAccessories,
};
