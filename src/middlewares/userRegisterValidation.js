/*const path = require('path');
const {body} = require('express-validator');

const valitations = [
    body('nombre').notEmpty().withMessage('Tenes que escibrir un nombre'),
    body('email')
    .notEmpty().withMessage('Tenes que escibrir un email').bail()
    .isEmail().withMessage('Tenes que escribir un correo válido'),
    body('email_confirm').notEmpty().withMessage('Tenes que escibrir un email igual a la anterior'),
    body('password').notEmpty().withMessage('Tenes que escibrir una contraseña'),
    body('confirm_password').notEmpty().withMessage('Tenes que escibrir una contraseña igual a la anterior'),
    body('avatar').custom((value, {req}) =>  {
        let file = req.file;
        if (!file){
            throw new Error('Tienes que subir una imagen');
        } 
        return true;
    })
]

module.exports = valitations;
*/

const { check } = require('express-validator');

module.exports = [
    check('nombre')
        .notEmpty().withMessage('Ingrese nombre y apellido'),
    check('email')
        .notEmpty().withMessage('Ingrese un email.')
        .isEmail().withMessage('Ingrese un email válido.')
        .custom(async (value, { req }) => {
            const user = await User.findOne({ email: value });
            if (user) throw 'El email ingresado ya existe.';
           }),
    check('password')
        .isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres'),
    check('confirm_password')
        .isLength({min:8}).withMessage('La contraseña debe ser igual a la anterior'),
    check('avatar')
        .custom((value, {req}) => {
            if(!(req.files.hasOwnProperty('image'))){
              return false;
            }
            var extension = (path.extname(req.files.image.name)).toLowerCase();
            console.log(extension);
            switch (extension) {
                case  '.jpg':
                    return '.jpg';
                case  '.jpeg':
                    return '.jpeg';
                case  '.png':
                    return '.png';
                case  '.gif':
                    return '.gif';
              default:
                    return false;
            }
          })
          .withMessage('Por favor, sube una imagen de extensión jpg, jpeg, png o gif')
      
]
    
