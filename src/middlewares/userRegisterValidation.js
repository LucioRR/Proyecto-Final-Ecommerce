const path = require('path');
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