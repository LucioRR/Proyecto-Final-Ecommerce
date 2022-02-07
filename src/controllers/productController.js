const {all, match, generate, create, update} = require('../models/product')

const productController = {
    productCart: (req, res) => res.render('product/productCart'),
    productDetail: (req, res) => {
        let id = Number(req.params.id);
        res.render('product/productDetail', {producto_id: match("id", id)});
    },
    productCreate: (req, res) => res.render('product/productCreate'),
    /*
    productEdit: (req, res) => res.render('product/productEdit'),*/
    productAll: (req, res) => res.render('product/allProducts', {productos: all()}),
    productStorage: (req, res) => {
        const productNew =  generate(req.body)
        create(productNew);
        return res.redirect('/productos/'+productNew.id)
    },
    update: (req, res) => {
        const id = Number(req.params.id);
        res.render('product/productEdit', {product_id: match("id", id)});
    },
    modify: (req, res) => {
        update(req.body);
        return res.redirect('/productos/' + req.body.id)
    }
}


module.exports = productController