const Crypto = require('../models/Crypto');

exports.create = async (cryptoObject, userId) => {
  await Crypto.create({ ...cryptoObject, owner: userId });
};

exports.getAll = () => {
  return Crypto.find().lean();
};

exports.getCryptoById = (cryptoId) => {
  return Crypto.findById(cryptoId).lean();
};

exports.addBuyer = async (cryptoId, buyerId) => {
  const crypto = await Crypto.findById(cryptoId);
  crypto.buyers.push(buyerId);
  await crypto.save();
};

exports.deleteCryptoById = async (cryptoId) => {
  await Crypto.findByIdAndRemove(cryptoId);
};

exports.updateCryptoById = async (cryptoId, cryptoObject) => {
  await Crypto.findByIdAndUpdate(cryptoId, cryptoObject);
};

// add the paymentMethod
exports.searchCryptos = async (search, paymentMethod) => {
  return await Crypto.find({ name: { $regex: search, $options: 'i' } }).lean();
};
