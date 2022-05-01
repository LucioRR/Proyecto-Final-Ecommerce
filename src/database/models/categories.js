module.exports = (sequelize, DataTypes) => {

    let alias = "Category"
    let cols = {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }    

    let config = {
        tableName: 'categories',
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);
    
    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'category'
        });
    }
    return Category;
}    