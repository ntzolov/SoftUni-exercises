const router = require('express').Router();

const homeController = require('../controllers/homeController');
const cubeController = require('../controllers/cubeController');
const accessoryController = require('../controllers/accessoryController');
const authController = require('../controllers/authController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);

router.get('/register', authController.getRegisterPage);
router.post('/register', authController.postRegisterPage);

router.get('/login', authController.getLoginPage);
router.post('/login', authController.postLoginPage);

router.get('/logout', isAuthenticated, authController.getLogoutPage);

router.get('/cubes/create', isAuthenticated, cubeController.getCreateCube);
router.post('/cubes/create', isAuthenticated, cubeController.postCreateCube);
router.get('/cubes/details/:cubeId', cubeController.getDetailsCube);
router.get('/cubes/edit/:cubeId', isAuthenticated, cubeController.getEditCube);
router.post('/cubes/edit/:cubeId', isAuthenticated, cubeController.postEditCube);
router.get('/cubes/delete/:cubeId', isAuthenticated, cubeController.getDeleteCube);
router.post('/cubes/delete/:cubeId', isAuthenticated, cubeController.postDeleteCube);

router.get('/accessories/create', isAuthenticated, accessoryController.getAccessoryPage);
router.post('/accessories/create', isAuthenticated, accessoryController.postAccessoryPage);
router.get('/accessories/attach/:cubeId', accessoryController.getAccessories);
router.post('/accessories/attach/:cubeId', accessoryController.postAccessories);

router.get('*', homeController.get404page);

module.exports = router;
