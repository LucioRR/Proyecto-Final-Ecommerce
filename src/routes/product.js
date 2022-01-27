const {Router} = require('express');
const router = Router();
const {productCart, productDetail, productCreate, productEdit} = require('../controllers/productController');

router.get('/producto', productDetail);
router.get('/carrito', productCart);
router.get('/producto/crear', productCreate)
router.get('/producto/editar', productEdit)

module.exports = router;