const {Router} = require('express');
const router = Router();
const {index, footer} = require('../controllers/mainController');

router.get('/', index)

router.get('/footer', footer)

module.exports = router;