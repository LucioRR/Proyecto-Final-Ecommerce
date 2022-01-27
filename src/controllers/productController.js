const path = require('path');

const productCart = (req, res) => res.render('productCart');
const productDetail = (req, res) => res.render('productDetail');
const productCreate = (req, res) => res.render('productCreate');

module.exports = {productCart, productDetail, productCreate}