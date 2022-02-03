const {Router} = require('express');
const router = Router();
const {productDetail, productCreate, productEdit, productAll} = require('../controllers/productController');

router.get('/', productAll)
router.get('/crear', productCreate);
router.get('/editar', productEdit);
router.get('/:id', productDetail);

module.exports = router;