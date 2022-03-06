const {Router} = require('express');
const router = Router();
const multer = require('multer');
const {register, processRegister, login, processLogin, profile, edit, logout} = require('../controllers/userController');
const folder = require('../middlewares/storage');
const upload = multer({storage: folder('user')});
const valitations = require('../middlewares/userRegisterValidation')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')


router.get('/login', guestMiddleware, login);
router.post('/login', processLogin);
router.get('/register', guestMiddleware, register);
router.post('/register', [upload.single('avatar')], valitations,  processRegister);
//router.get('profile/edit/:userId', edit)
router.get('/profile', authMiddleware, profile)
router.get('/logout', logout)

module.exports = router;