const Animal = require('../models/Animal');

exports.createAnimal = async (animalObjData) => {
  await Animal.create(animalObjData);
};

exports.getAllAnimals = async () => {
  return await Animal.find().lean();
};

exports.getAnimalById = async (animalId) => {
  return await Animal.findOne({ _id: animalId }).populate('donations').populate('owner').lean();
};

exports.deleteAnimalById = async (animalId) => {
  await Animal.findByIdAndDelete(animalId);
};

exports.updateAnimalById = async (animalId, animalObjData) => {
  await Animal.findByIdAndUpdate(animalId, animalObjData, { runValidators: true });
};

exports.addDonation = async (animalId, userId) => {
  const animal = await Animal.findOne({ _id: animalId });
  animal.donations.push(userId);
  await animal.save();
};

exports.getLastTreeAnimals = async () => {
  return await Animal.find().sort({ _id: -1 }).limit(3).lean();
};

exports.searchAnimals = async (search) => {
  return await Animal.find({ location: { $regex: search, $options: 'i' } }).lean();
};
