const {Router} = require('express');
const router = Router();
const {index} = require('../controllers/mainController');

router.get('/', index)

module.exports = router;