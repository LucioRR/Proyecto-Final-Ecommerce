const path = require('path');
const {Router} = require('express');
const router = Router();
const multer = require('multer');
const {productDetail, productCreate, productAll, productStorage, update, modify} = require('../controllers/productController');
const folder = require('../middlewares/storage');
const upload = multer({storage: folder('product')});




router.get('/', productAll)
router.get('/crear', productCreate);
router.get('/editar/:id', update);
router.put('/update',[upload.any()], modify);
router.post('/guardar', upload.fields([
    { name: 'imagen', maxCount: 1 },
    { name: 'imagenes', maxCount: 2 },
  ]), productStorage);
router.get('/:id', productDetail);


module.exports = router;