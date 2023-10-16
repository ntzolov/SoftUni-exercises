const mongoose = require('mongoose');
const { DATABASE_NAME } = require('../virtualEnv');

module.exports = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${DATABASE_NAME}`);
    console.log(`Connected to '${DATABASE_NAME}' database!`);
  } catch (error) {
    console.log(error);
  }
};
