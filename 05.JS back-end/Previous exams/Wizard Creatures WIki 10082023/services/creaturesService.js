const Creature = require('../models/Creature');

exports.createCreature = async (creatureDataObject, userId) => {
  await Creature.create({ ...creatureDataObject, owner: userId });
};

exports.getAllCreatures = async () => {
  return await Creature.find().lean();
};

exports.getCreatureById = async (creatureId) => {
  return await Creature.findById(creatureId).populate('owner').populate('votes').lean();
};

exports.creatureVote = async (userId, creatureId) => {
  const creature = await Creature.findById(creatureId);
  creature.votes.push(userId);
  await creature.save();
};

exports.deleteCreatureById = async (creatureId) => {
  await Creature.findByIdAndDelete(creatureId);
};

exports.updateCreature = async (creatureId, creatureDataObject) => {
  await Creature.findByIdAndUpdate(creatureId, creatureDataObject, { runValidators: true });
};

exports.getAllCreaturesByOwner = async (userId) => {
  return await Creature.find({ owner: userId }).populate('votes').populate('owner').lean();
};
