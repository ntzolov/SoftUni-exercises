const router = require('express').Router();

router.post('/register', (req, res) => {
  const {username, password, rePassword} = req.body

  console.log(username, password, rePassword);
});

router.post('/login', (req, res) => {});

router.get('/logout', (req, res) => {});

module.exports = router;
