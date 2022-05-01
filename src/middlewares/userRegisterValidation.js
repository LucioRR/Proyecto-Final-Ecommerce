/*
const path = require('path');
const {body} = require('express-validator');

const valitations = [
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
const {User} = require('../database/models')
const path = require('path');

module.exports = [
    // check('nombre')
    //     .notEmpty().withMessage('Ingrese nombre y apellido'),
    check('email')
        .notEmpty().withMessage('Ingrese un email.')
        .isEmail().withMessage('Ingrese un email válido.')
        .custom(async (value, { req }) => {
            const user = await User.findOne({where: {email: value }});
            if (user) throw 'El email ingresado ya existe.';
            }),
    check('email_confirm')
            .notEmpty().withMessage('Repita su email')
            .isEmail().withMessage('Ingrese un email válido.')
            .custom((value, { req }) => {
                if (req.body.email !== value) {
                    throw new Error('El email debe ser igual al anterior.');
            } return true;
        }),
    check('password')
        .isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres'),
    check('confirm_password')
        .isLength({min:8}).withMessage('La contraseña debe contener al menos 8 caracteres')
        .custom((value, { req }) => {
            if (req.body.password !== value) {
                throw new Error('La contraseña debe ser igual a la anterior');
        } return true;
    }),
    check('avatar')
        .custom((value, {req}) => {
            if(!(req.file.hasOwnProperty('filename'))){
                return false;
            }
            let extension = path.extname(req.file.filename);
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
