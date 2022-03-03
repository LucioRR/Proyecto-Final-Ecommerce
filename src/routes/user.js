const {Router} = require('express');
const router = Router();
const multer = require('multer');
const {register, processRegister, login, processLogin, profile, edit} = require('../controllers/userController');
const folder = require('../middlewares/storage');
const upload = multer({storage: folder('user')});
const valitations = require('../middlewares/userRegisterValidation')


router.get('/login', login);
router.post('/login', processLogin);
router.get('/register', register);
router.post('/register', [upload.single('avatar')], valitations,  processRegister);
//router.get('profile/edit/:userId', edit)
router.get('/profile/:userId', profile)


module.exports = router;