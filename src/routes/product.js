const {Router} = require('express');
const router = Router();
const {productCart, productDetail} = require('../controllers/productController');

router.get('/producto', productDetail);
router.get('/carrito', productCart);


module.exports = router;