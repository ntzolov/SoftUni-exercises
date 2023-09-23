const authController = require('../controllers/authController');
const charactersController = require('../controllers/charactersController');

module.exports = (app) => {
  app.use('/auth', authController);
  app.use('/characters', charactersController);
};
