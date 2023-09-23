const mongoose = require('mongoose');

module.exports = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch(() => {
      console.log("Couldn't connect to MongoDB");
    });
};
