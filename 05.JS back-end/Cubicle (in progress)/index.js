const database = require('./config/database');
const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();

require('./config/express')(app);
require('./config/routes')(app);

database
  .connect()
  .then(() => app.listen(config.port, console.log(`Listening on port ${config.port}!`)))
  .catch((err) => console.log(err.message));
