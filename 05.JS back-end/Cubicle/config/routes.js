const homeController = require('../controllers/homeController');
const cubeController = require('../controllers/cubeController');
const accessoryController = require('../controllers/accessoryController');
const authController = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

module.exports = (app) => {
  app.get('/', homeController.getHomePage);
  app.get('/about', homeController.getAboutPage);

  app.get('/register', authController.getRegisterPage);
  app.post('/register', authController.postRegisterPage);

  app.get('/login', authController.getLoginPage);
  app.post('/login', authController.postLoginPage);

  app.get('/logout', isAuthenticated, authController.getLogoutPage);

  app.get('/cubes/create', isAuthenticated, cubeController.getCreateCube);
  app.post('/cubes/create', isAuthenticated, cubeController.postCreateCube);
  app.get('/cubes/details/:cubeId', cubeController.getDetailsCube);
  app.get('/cubes/edit/:cubeId', isAuthenticated, cubeController.getEditCube);
  app.post('/cubes/edit/:cubeId', isAuthenticated, cubeController.postEditCube);
  app.get('/cubes/delete/:cubeId', isAuthenticated, cubeController.getDeleteCube);
  app.post('/cubes/delete/:cubeId', isAuthenticated, cubeController.postDeleteCube);

  app.get('/accessories/create', isAuthenticated, accessoryController.getAccessoryPage);
  app.post('/accessories/create', isAuthenticated, accessoryController.postAccessoryPage);
  app.get('/accessories/attach/:cubeId', accessoryController.getAccessories);
  app.post('/accessories/attach/:cubeId', accessoryController.postAccessories);

  app.get('*', homeController.get404page);
};
