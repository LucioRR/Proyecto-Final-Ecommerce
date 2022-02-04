const{readFileSync, writeFileSync,unlinkSync,existsSync} = require("fs")
const path = require('path');


const productModels = {
    file: path.join(__dirname, '../data/productos.json'),
    read: () => readFileSync(productModels.file,"utf-8"),
    list: () => JSON.parse(productModels.read()),
    all: () => productModels.list().filter(producto => producto.activo !== undefined),
    match: (propiedad,valor) => productModels.all().find(producto => producto[propiedad] == valor )
}


module.exports = productModels