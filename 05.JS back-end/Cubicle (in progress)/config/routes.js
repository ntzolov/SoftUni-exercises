const homeController = require('../controllers/homeController');
const cubeController = require('../controllers/cubeController');

module.exports = (app) => {
  app.get('/', homeController.getHomePage);
  app.get('/about', homeController.getAboutPage);

  app.get('/create', cubeController.getCreateCube);
  app.post('/create', cubeController.postCreateCube);
  app.get('/details/:cubeId', cubeController.getDetailsCube);

  app.get('*', homeController.get404page);
};
