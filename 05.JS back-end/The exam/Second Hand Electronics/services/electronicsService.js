const Electronics = require('../models/Electronics');

exports.createElectronics = async (electronicsDataObj) => {
  await Electronics.create(electronicsDataObj);
};

exports.getAllElectronics = async () => {
  return await Electronics.find().lean();
};

exports.getElectronicsById = async (electronicsId) => {
  return await Electronics.findById(electronicsId).lean();
};

exports.addUserToBuyingList = async (electronicsId, userId) => {
  const electronics = await Electronics.findById(electronicsId);
  electronics.buyingList.push(userId);
  await electronics.save();
};

exports.updateElectronicsById = async (electronicsId, electronicsDataObj) => {
  await Electronics.findByIdAndUpdate(electronicsId, electronicsDataObj, { runValidators: true });
};

exports.deleteElectronicsById = async (electronicsId) => {
  await Electronics.findByIdAndDelete(electronicsId);
};

exports.searchElectronics = async (name, type) => {
  return await Electronics.find({ name: { $regex: name, $options: 'i' }, type: { $regex: type, $options: 'i' } }).lean();
};
