const {Router} = require('express');
const router = Router();
const multer = require('multer');
const {register, processRegister, login, processLogin, profile, edit, logout} = require('../controllers/userController');
const folder = require('../middlewares/storage');
const upload = multer({storage: folder('user')});
const valitations = require('../middlewares/userRegisterValidation')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')



//Muestra la pantalla de login
router.get('/login', guestMiddleware, login);
//Procesa el Login
router.post('/login', processLogin);

//Muestra la pantalla de registro
router.get('/register', guestMiddleware, register);
//Procesa el registro.
router.post('/register', [upload.single('avatar')], valitations,  processRegister);


//Perfil de usuario
router.get('/profile', authMiddleware, profile)
// Editar el perfil de Usuario
//router.get('profile/edit/:userId', edit)

// Deslogueo
router.get('/logout', logout)

module.exports = router;