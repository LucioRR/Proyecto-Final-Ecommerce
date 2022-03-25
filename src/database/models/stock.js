module.exports = (sequelize, DataTypes) => {

    let alias = 'Stock';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        product:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }  
    
    let config = {
        tableName: 'stock',
        timestamps: false
    }

    const Stock = sequelize.define(alias, cols, config);

    Stock.associate = function(models){
        Stock.belongsTo(models.Product, {
            as: 'product_id',
            foreignKey: 'product'
            });

        Stock.belongsTo(models.Color, {
            as: 'color_id',
            foreignKey: 'color'
            });

        Stock.belongsTo(models.Size, {
            as: 'size_id',
            foreignKey: 'size'
        });
    }

    return Stock;
}