const path = require('path');
const fs = require('fs');

const productosFilePath = path.join(__dirname, '../data/productos.json');
const productos_json = fs.readFileSync(productosFilePath, "utf-8");
const productos = JSON.parse(productos_json);


const productCart = (req, res) => res.render('productCart');
const productDetail = (req, res) => {
    let id = req.params.id;
    let producto_seleccionado = (id) => {
        const producto_id = productos.find(prod_seleccionado => prod_seleccionado.id == id);
        return producto_id;
    }       
   res.render('productDetail', {producto_id: producto_seleccionado(id)});
} 
const productCreate = (req, res) => res.render('productCreate');
const productEdit = (req, res) => res.render('productEdit');
const productAll = (req, res) => res.render('allProducts', {productos});



module.exports = {productCart, productDetail, productCreate, productEdit, productAll}