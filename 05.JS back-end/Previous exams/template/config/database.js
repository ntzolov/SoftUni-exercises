const mongoose = require('mongoose');
const { DATABASE_NAME } = require('../virtualEnv');

const databaseName = DATABASE_NAME;

module.exports = async () => {
  try {
    await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`);
    console.log(`Connected to '${databaseName}' database!`);
  } catch (error) {
    console.log(error);
  }
};
