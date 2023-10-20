const Ad = require('../models/Ad');
const User = require('../models/User');

exports.createAd = async (adDataObj) => {
  return await Ad.create(adDataObj);
};

exports.updateUserAds = async (userId, adId) => {
  const user = await User.findById(userId);
  user.myAds.push(adId);
  await user.save();
};

exports.getAllAds = async () => {
  return await Ad.find().lean();
};

exports.getAdById = async (adId) => {
  return await Ad.findById(adId).populate('author').lean();
};

exports.updateAdById = async (adId, adDataObj) => {
  await Ad.findByIdAndUpdate(adId, adDataObj, { runValidators: true });
};

exports.deleteAdById = async (adId) => {
  await Ad.findByIdAndDelete(adId);
};

exports.getFirstTreeAds = async () => {
  return await Ad.find().sort({ _id: 1 }).limit(3).lean();
};

exports.updateCandidates = async (adId, userId) => {
  const ad = await Ad.findById(adId);
  ad.usersApplied.push(userId);
  await ad.save();
};

exports.getAllAdsWithCandidates = async (adId) => {
  return await Ad.findById(adId).populate('usersApplied').lean();
};
