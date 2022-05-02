const {Product, Category} = require('../../database/models')


module.exports = {
    index: async (req, res) => {
        try {
            let allProducts = await Product.findAll();
            let allCategories = await Category.findAll({include: {all: true}});

            return res.status(200).json({
                count: allProducts.length,
                countByCategory: allCategories.map(category => Object({
                    id: category.id, 
                    name: category.name, 
                    count: category.products.length
                })),
                products: allProducts,
                status: 200
            });
            
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    show: async (req, res) => {
        try {
            let product = await Product.findByPk(req.params.id, {include: {all: true}});

            return res.status(200).json({
                id: product.id,
                name: product.name,
                category: product.category_id.name,
                brand: product.brand_id.name,
                price: product.price,
                images: product.images.map(image => Object({
                    id: image.id,
                    url: image.url
                })
                ),
            })
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    }
}