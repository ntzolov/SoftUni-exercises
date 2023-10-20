const router = require("express").Router();
const homeController = require("../controllers/homeController");
const authController = require("../controllers/authController");
const catalogController = require("../controllers/catalogController");
const userController = require("../controllers/userController");

router.use(homeController);
router.use("/auth", authController);
router.use("/user", userController);
router.use("/catalog", catalogController);
router.use("*", (req, res) => {
  res.render("404");
});

module.exports = router;
