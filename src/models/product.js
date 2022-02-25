const{readFileSync, writeFileSync,unlinkSync,existsSync} = require("fs")
const path = require('path');


const productModels = {
    file: path.join(__dirname, '../data/productos.json'),
    read: () => readFileSync(productModels.file,"utf-8"),
    list: () => JSON.parse(productModels.read()),
    convert: data => JSON.stringify(data,null,2),
    write: data => writeFileSync(productModels.file, productModels.convert(data)),
    all: () => productModels.list().filter(producto => producto.activo !== undefined),
    match: (propiedad,valor) => productModels.all().find(producto => producto[propiedad] == valor ),
    generate: data => Object({
        id: productModels.list().length > 0 ? productModels.list().sort((a,b) => a.id < b.id ? -1: a.id > b.id ? 1 : 0).pop().id + 1 : 1,
        categoria: data.categoria,
        nombre_producto: data.nombre_producto,
        marca: data.marca,
        descripcion: data.descripcion,
        precio: Number(data.precio),
        talle: data.talle,
        color: data.color,
        stock: Number(data.stock),
/*         imagen: data.files && data.files.length > 0 ? data.files[imagen].map(file => file.filename): null,
        imagenes: data.files && data.files.length > 0 ? data.files[imagenes].map(file => file.filename): null, */
        imagen: data.files && data.files.length > 0 ? data.files[0].filename: null,
        imagenes1: data.files && data.files.length > 0 ? data.files[1].filename: null,
        imagenes2: data.files && data.files.length > 0 ? data.files[2].filename: null,
        activo: data.activo == "activo" ? true : false
    }),
    create: data =>{
        let lista= productModels.list().sort((a,b) => a.id < b.id ? -1: a.id > b.id ? 1 : 0)
        lista.push(data),
        productModels.write(lista);
    },
    update: data =>{
        let products= productModels.list().map((product) => {
            if (product.id == data.id){
                product.categoria = data.categoria;
                product.nombre_producto = data.pname;
                product.marca = data.marca;
                product.descripcion = data.descripcion;
                product.precio = Number (data.precio);
                product.talle = data.talle;
                product.color = data.pcolor;
                product.stock = data.stock;
                product.imagen = data.files && data.files.length > 0 ? data.files[0].filename: null;
                product.imagenes1 = data.files && data.files.length > 0 ? data.files[1].filename: null;
                product.imagenes2 = data.files && data.files.length > 0 ? data.files[2].filename: null;
                if (data.activo == "activo") {
                    product.activo = true;
                } else {
                    product.activo = false;
                }
            }
            return product
        })
        productModels.write(products)
    },
    trash: id => {
        let productos = productModels.list()
        productModels.write(productos.filter(producto => producto.id != id));
    }
}


module.exports = productModels