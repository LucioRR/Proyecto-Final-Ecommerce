const { check } = require('express-validator');
const {Product} = require('../database/models')
const path = require('path');

module.exports = [
    check('name')
        .notEmpty().withMessage('Ingrese un nombre del producto.')
        .isLength({min:5}).withMessage('El nombre del producto debe contener al menos 5 caracteres'),
    check('category')
        .custom(async (value, { req }) => {
            const category = await Product.findOne({where: {brand: value }});
            if (!category) throw 'La categoría ingresada no existe.';
            }),
    check('description')
        .isLength({min:20}).withMessage('La descripción debe contener al menos 20 caracteres'),
    check('prince')
            .isInt().withMessage('El precio debe ser un número.'),
    check('images')
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