const path = require('path');
const {Router} = require('express');
const router = Router();
const multer = require('multer');
const {productDetail, productCreate, productAll, productStorage, update, modify, trash} = require('../controllers/productController');
const folder = require('../middlewares/storage');
const upload = multer({storage: folder('product')});




router.get('/', productAll)
router.get('/crear', productCreate);
router.get('/editar/:id', update);
router.put('/update',upload.array('imagen'), modify);
router.post('/guardar', upload.array('imagen'), productStorage);
router.get('/:id', productDetail);
router.delete('/borrar',trash);

module.exports = router;