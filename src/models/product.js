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
        category: data.categoria,
        name: data.nombre_producto,
        marca: data.marca,
        description: data.descripcion,
        price: Number(data.precio),
        talle: data.talle,
        color: data.color,
        stock: Number(data.stock)   
    }),
    create: data =>{
        let lista= productModels.list().sort((a,b) => a.id < b.id ? -1: a.id > b.id ? 1 : 0)
        lista.push(data),
        productModels.write(lista);
    },
    update: data =>{
        let products= productModels.list().map((product) => {
            if (product.id==data.id){
                product.categoria=data.categoria
                product.nombre_producto=data.pname
                product.marca=data.marca
                product.descripcion=data.descripcion
                product.precio= Number (data.precio)
                product.talle=data.talle
                product.color=data.pcolor
                product.stock=data.stock
                if (data.activo=='activo'){
                    product.activo==true
                }
                else {
                    product.false
                }
            }
            return product
        })
        productModels.write(products)
    }


}


module.exports = productModels