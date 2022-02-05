const {Router} = require('express');
const router = Router();
const {productDetail, productCreate, productAll, productStorage, update, modify} = require('../controllers/productController');

router.get('/', productAll)
router.get('/crear', productCreate);
router.get('/editar/:id', update);
router.put('/update', modify);
router.post('/guardar', productStorage);
router.get('/:id', productDetail);


module.exports = router;