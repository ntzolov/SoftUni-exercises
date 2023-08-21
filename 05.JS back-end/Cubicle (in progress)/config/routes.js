const homeController = require('../controllers/homeController');
const cubeController = require('../controllers/cubeController');
const accessoryController = require('../controllers/accessoryController');

module.exports = (app) => {
  app.get('/', homeController.getHomePage);
  app.get('/about', homeController.getAboutPage);

  app.get('/cubes/create', cubeController.getCreateCube);
  app.post('/cubes/create', cubeController.postCreateCube);
  app.get('/cubes/details/:cubeId', cubeController.getDetailsCube);

  app.get('/accessories/create', accessoryController.getAccessoryPage);
  app.post('/accessories/create', accessoryController.postAccessoryPage);
  app.get('/accessories/attach/:cubeId', accessoryController.getAccessories);
  app.post('/accessories/attach/:cubeId', accessoryController.postAccessories);

  app.get('*', homeController.get404page);
};
