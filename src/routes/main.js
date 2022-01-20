const {Router} = require('express');
const router = Router();
const {index, footer, header} = require('../controllers/mainController');

router.get('/', index)
router.get('/header', header)

router.get('/footer', footer)

module.exports = router;