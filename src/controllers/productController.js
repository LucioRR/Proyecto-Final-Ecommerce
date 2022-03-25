// const {all, match, generate, create, update, trash} = require('../models/product')
const {Product, Brand} = require('../database/models')


module.exports = {
    productAll: async (req, res) => {
        try {
            const products = await Product.findAll({include: {all: true}});
            const brand = await Brand.findAll({include: {all: true}});
            res.send(products);
        }
        catch (error) {
            res.status(500).send({message: error.message});
        }
    },
    productCreate: (req, res) => res.render('product/productCreate'),

    productStorage: async (req, res) => {
        
        const sizeData = req.body.talle
        try {
            let marcaEncontrada = await Brand.findAll({ where : {
                name: req.body.marca,
                }
            });

            // res.send(marcaEncontrada);

            if (marcaEncontrada.length == 0) {
                marcaEncontrada = await Brand.create({name: req.body.marca})
            }

            let marcaDefinida = JSON.parse(marcaEncontrada, null, 2);

            console.log(marcaDefinida[0].id);
        
            const productNew = await Product.create({
                name: req.body.nombre_producto,
                category: req.body.categoria,
                description: req.body.descripcion,
                price: Number(req.body.precio),
                active: req.body.active ? 1 : 0,
                brand: marcaEncontrada[0].Brand.dataValues.id
            });

            return res.redirect('/productos/' + productNew.id)
        }
        catch (error) {
            res.status(500).send({message: error.message})
        }
        
        
    }

}


// const productController = {
//     productCart: (req, res) => res.render('product/productCart'),
//     productDetail: (req, res) => {
//         let id = Number(req.params.id);
//         res.render('product/productDetail', {producto_id: match("id", id)});
//     },
//     productCreate: (req, res) => res.render('product/productCreate'),
//     productAll: (req, res) => res.render('product/allProducts', {productos: all()}),
//     productStorage: (req, res) => {
//         req.body.files = req.files;
//         const productNew =  generate(req.body)
//         create(productNew);
//         return res.redirect('/productos/' + productNew.id)
//     },
//     update: (req, res) => {
//         const id = Number(req.params.id);
//         res.render('product/productEdit', {product_id: match("id", id)});
//     },
//     modify: (req, res) => {
//         req.body.files = req.files;
//         update(req.body);
//         return res.redirect('/productos/' + req.body.id)
//     },
//     trash:(req,res) => {
//         trash(req.body.id);
//         return res.redirect('/productos')
//     }
// }