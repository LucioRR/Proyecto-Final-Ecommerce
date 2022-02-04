const {Router} = require('express');
const router = Router();
const {productDetail, productCreate, productEdit, productAll, productStorage} = require('../controllers/productController');

router.get('/', productAll)
router.get('/crear', productCreate);
router.get('/editar', productEdit);
router.get('/:id', productDetail);

router.post('/guardar', productStorage)

module.exports = router;