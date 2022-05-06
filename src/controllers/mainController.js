const path = require('path');
const {Product} = require('../database/models')


module.exports = {
    index: async (req, res) => {
        function randomList (array, quanProduct){
            var rValue = [];
            var rand;
            for (var i = 0; i < quanProduct; i++){
                rand = Math.floor(Math.random()*array.length);
                rValue.push(array[rand]) ;
            }
            return rValue;
        }
        
        try {
            const allProducts = await Product.findAll({include: {all: true}});
            const sales = await Product.findAll({order: [['price', 'ASC']],
                                                limit: 5, 
                                                include: {all: true}
                                            });
            const forYou = randomList(allProducts, 5);
            const newArrivals = await Product.findAll({order: [['id', 'DESC']],
                                                    limit: 5,
                                                    include: {all: true}
                                                    });
            const loveIt = randomList(allProducts, 5);
            
            res.render('main/index', {
                sales: sales,
                forYou: forYou,
                newArrivals: newArrivals,
                loveIt: loveIt
            });

        } catch (error) {
            res.status(500).send({message: error.message});
        }
    }
}

