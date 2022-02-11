const path = require('path');
const multer = require('multer');

/* const folder = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../upload/product');

    },
    filename: function (req, file, cb) {
        cb(null,
    `${Date.now()}_img_${path.extname(file.originalname)}`);
    } 
})
 */
module.exports = folder => multer.diskStorage({
    destination: (req, file, cb) => cb(null,path.resolve(__dirname,'../../upload', folder)),
    filename: (req, file, cb) => cb(null,file.fieldname + '-' + Date.now() + '-' + path.extname(file.originalname))
}) 