// const {all, match, generate, create, update, trash} = require('../models/product')
const {Product, Brand, Color, Stock, Category} = require('../database/models')
const {validationResult} = require('express-validator');
const { Op } = require("sequelize");


module.exports = {
    productAll: async (req, res) => {
        try {
            const products = await Product.findAll({include: {all: true}});
            const stock = await Stock.findAll({include: {all: true}})
            // res.send({products: products, stock: stock});
            res.render('product/allProducts', {productos: products, stock: stock});
        }
        catch (error) {
            res.status(500).send({message: error.message});
        }
    },
    productCreate: (req, res) => res.render('product/productCreate'),
    productStorage: async (req, res) => {
        try{
            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render('product/productCreate', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            };
            //Se crea la marca o se le obtine si ya existe.
            let marcaEncontrada = await Brand.findOrCreate({ where :
                    { name: req.body.marca}
                });
                //Se Crea o se modifica el color, según corresponda.
            let colorNew = await Color.findOrCreate({
                where: 
                    {name: req.body.nombreColor}, 
                defaults: 
                    {value: req.body.color}
            });
            //Se crea el producto y se carga las imágenes
            let productNew = await Product.create({
                name: req.body.nombre_producto,
                category: req.body.categoria,
                description: req.body.descripcion,
                price: Number(req.body.precio),
                active: req.body.activo == "activo" ? true : false,
                brand: marcaEncontrada[0].dataValues.id,
                color: colorNew[0].dataValues.id,
                images: [
                    {
                        url: req.files[0].filename
                    },
                    {
                        url: req.files[1].filename
                    },
                    {
                        url: req.files[2].filename
                    }
                ]},{
                    include: 'images'
                });
            
            //Se crea la tabla intermedia de Stock
            let stockNew = await Stock.create({
                size: req.body.talle,
                stock: req.body.stock,
                product: productNew.id,
                color: colorNew[0].dataValues.id
            });

            return res.redirect('/productos/' + productNew.id)
        }
        catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    update: async (req, res) => {
        const id = Number(req.params.id);
        try {
            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render('product/productEdit', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            };
            const products = await Product.findByPk(id, {include: {all: true}});
            const stock = await Stock.findOne({where: {product: id}, include: {all: true}})
            res.render('product/productEdit', {product_id: products, stock: stock});
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    modify: async (req, res) => {
        const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render('product/productCreate', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            };
        req.body.files = req.files;
        try{
            let id = Number(req.body.id);
            //Se busca en la BD el producto a modificar
            let productToModify = await Product.findByPk(id);
            //Se busca el stock correspondiente al producto a modificar
            let stockToModify = await Stock.findOne({where: {product: id}});
            //Se crea la marca o se le obtine si ya existe.
            let marcaEncontrada = await Brand.findOrCreate({ where :
                {name: req.body.marca}
            });
            // Se Modifica el producto
            let productModificated = await productToModify.update({
                name: req.body.nombre_producto,
                category: req.body.categoria,
                description: req.body.descripcion,
                price: Number(req.body.precio),
                active: req.body.activo == "activo" ? true : false,
                brand: marcaEncontrada[0].dataValues.id,
                images: [
                    {
                        url: req.files[0].filename
                    },
                    {
                        url: req.files[1].filename
                    },
                    {
                        url: req.files[2].filename
                    }
                ]},{
                    include: 'images'
                });
            //Se Crea o se modifica el color, según corresponda.
            let color = await Color.findOrCreate({
                where: 
                    {name: req.body.nombreColor}, 
                defaults: 
                    {value: req.body.pcolor}
            });
            //Se modifica el stock encontrado.
            let stockModificated = await stockToModify.update({
                size: req.body.talle,
                stock: req.body.stock,
                product: req.params.id,
                color: color[0].dataValues.id
            })
            return res.redirect('/productos/' + req.body.id);
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    productDetail: async (req, res) => {
        let id = Number(req.params.id);
        try {
            const product = await Product.findByPk(id, {include: {all: true}});
            const stock = await Stock.findOne({where: {product: id}});
            const stockCompleto = await Stock.findByPk(stock.id, {include: {all: true}});
            res.render('product/productDetail', {producto_id: product, stock: stockCompleto});
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    trash: async (req, res) => {
        try {
            let productToDelete = await Product.findByPk(req.body.id);
            await productToDelete.destroy();
            return res.redirect('/productos')
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    search: async(req, res) => {
        try {
            const word = req.query.q
            let productsList = await Product.findAll({
                include: {all: true},
                where: {
                    name:{
                        [Op.like]: '%' + word + '%'
                    }
                }
            })
            res.render('product/allProducts', {productos: productsList});
        } catch (error) {
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