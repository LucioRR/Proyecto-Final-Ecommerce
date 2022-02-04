const {all, match} = require('../models/product')
const productController = {
    productCart: (req, res) => res.render('product/productCart'),
    productDetail: (req, res) => {
        let id = Number(req.params.id);
        res.render('product/productDetail', {producto_id: match("id", id)});
    },
    productCreate: (req, res) => res.render('product/productCreate'),
    productEdit: (req, res) => res.render('product/productEdit'),
    productAll: (req, res) => res.render('product/allProducts', {productos: all()})
}


module.exports = productController