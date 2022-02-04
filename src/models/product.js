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
        name: data.nombre_producto,
        description: data.descripcion,
        price: Number(data.precio),
        stock: Number(data.stock)
    }),
    create: data =>{
        let lista= productModels.list().sort((a,b) => a.id < b.id ? -1: a.id > b.id ? 1 : 0)
        lista.push(data),
        productModels.write(lista);
    }
}


module.exports = productModels