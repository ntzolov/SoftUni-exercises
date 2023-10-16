const Game = require('../models/Game');

exports.createGame = async (gameDataObj, userId) => {
  await Game.create({ ...gameDataObj, userId });
};

exports.getAllGames = async () => {
  return await Game.find().lean();
};

exports.getGameById = async (gameId) => {
  return await Game.findById(gameId).lean();
};

exports.updateGameById = async (gameId, gameDataObj) => {
  await Game.findByIdAndUpdate(gameId, gameDataObj, { runValidators: true });
};

exports.deleteGameById = async (gameId) => {
  await Game.findByIdAndDelete(gameId);
};

exports.addBuyerToGame = async (gameId, userId) => {
  const game = await Game.findById(gameId);
  game.boughtBy.push(userId);
  await game.save();
};

exports.searchGame = async (searchInput, platformInput) => {
  return await Game.find({ name: { $regex: searchInput, $options: 'i' }, platform: { $regex: platformInput } }).lean();
};
