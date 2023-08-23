const mongoose = require('mongoose');
const databaseName = 'cubicle';

async function connect() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`);
  console.log(`Connected to '${databaseName}' database!`);
}

module.exports = {
  connect,
};
