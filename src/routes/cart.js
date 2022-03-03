const {Router} = require('express');
const router = Router();

const productCart = require('../controllers/cartController');

router.get('/carrito', productCart);


module.exports = router;