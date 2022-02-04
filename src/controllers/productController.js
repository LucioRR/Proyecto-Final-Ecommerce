const {all, match} = require('../models/product')

const productCart = (req, res) => res.render('product/productCart');

const productDetail = (req, res) => {
    let id = Number(req.params.id);
    res.render('product/productDetail', {producto_id: match("id", id)});
} 
const productCreate = (req, res) => res.render('product/productCreate');
const productEdit = (req, res) => res.render('product/productEdit');
const productAll = (req, res) => res.render('product/allProducts', {productos: all()});



module.exports = {productCart, productDetail, productCreate, productEdit, productAll}