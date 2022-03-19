module.exports = (sequelize, DataTypes) => {

    let alias = 'Stock';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
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
        Stock.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'stock'
            });

        Stock.hasMany(models.Color, {
            as: 'color',
            foreignKey: 'Stock'
            });

        Stock.hasMany(models.Size, {
            as: 'size',
            foreignKey: 'Stock'
        });
    }

    return Stock;
}