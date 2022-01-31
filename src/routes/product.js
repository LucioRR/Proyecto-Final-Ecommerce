const {Router} = require('express');
const router = Router();
const {productDetail, productCreate, productEdit, productAll} = require('../controllers/productController');

router.get('/', productDetail);
router.get('/crear', productCreate);
router.get('/editar', productEdit);
router.get('/all', productAll)

module.exports = router;