const path = require('path');

const productCart = (req, res) => res.render('productCart');
const productDetail = (req, res) => res.render('productDetail');
const productCreate = (req, res) => res.render('productCreate');
const productEdit = (req, res) => res.render('productEdit');
const productAll = (req, res) => res.render('allProducts');

module.exports = {productCart, productDetail, productCreate, productEdit, productAll}