const path = require('path');
const {Router} = require('express');
const router = Router();
const multer = require('multer');
const {productDetail, productCreate, productAll, productStorage, update, modify, trash} = require('../controllers/productController');
const folder = require('../middlewares/storage');
const upload = multer({storage: folder('product')});



// Muestra todos los productos
router.get('/', productAll)

// Crea un nuevo producto
router.get('/crear', productCreate);
router.post('/guardar', upload.array('imagen'), productStorage);

//Edita un producto
router.get('/editar/:id', update);
router.put('/update',upload.array('imagen'), modify);

//Elimina un producto
// router.delete('/borrar',trash);

// Muestra un producto por id
router.get('/:id', productDetail);

module.exports = router;