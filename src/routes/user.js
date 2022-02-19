const {Router} = require('express');
const router = Router();
const multer = require('multer');
const {register, processRegister, login} = require('../controllers/userController');
const folder = require('../middlewares/storage');
const upload = multer({storage: folder('users')});
const valitations = require('../middlewares/userRegisterValidation')


router.get('/login', login);
router.get('/register', register);
router.post('/register', [upload.single('avatar')], valitations,  processRegister);


module.exports = router;