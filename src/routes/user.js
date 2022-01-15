const {Router} = require('express');
const router = Router();
const {register} = require('../controllers/userController');

router.get('/register', register);

module.exports = router;