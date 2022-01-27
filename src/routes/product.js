const {Router} = require('express');
const router = Router();
const {productCart, productDetail, productCreate} = require('../controllers/productController');

router.get('/producto', productDetail);
router.get('/carrito', productCart);
router.get('/producto/crear', productCreate)


module.exports = router;