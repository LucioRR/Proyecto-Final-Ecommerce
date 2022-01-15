const path = require('path');

const productCart = (req, res) => res.render('productCart');
const productDetail = (req, res) => res.render('productDetail');

module.exports = {productCart, productDetail}