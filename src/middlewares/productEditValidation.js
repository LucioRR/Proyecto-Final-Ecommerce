const { check } = require('express-validator');
const req = require('express/lib/request');
const path = require('path');

module.exports = [
    check('nombre_producto')
        .notEmpty().withMessage('Ingrese un nombre del producto.')
        .isLength({min:5}).withMessage('El nombre del producto debe contener al menos 5 caracteres.'),
    check('marca')
        .notEmpty().withMessage('Ingrese la marca del producto.'),
    check('descripcion')
        .notEmpty().withMessage('Ingrese una descripción del producto.')
        .isLength({min:20}).withMessage('La descripción debe contener al menos 20 caracteres.'),
    check('precio')
        .isFloat().withMessage('El precio debe ser un número.'),
    check('stock')
        .notEmpty().withMessage('Ingrese un número de stock.'),
]