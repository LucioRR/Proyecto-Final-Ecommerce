module.exports = (sequelize, DataTypes) => {

    let alias = 'Product';
    let cols = {
          id:{
               type: DataTypes. INTEGER,
               autoIncrement: true,
               primaryKey: true,
          },
          name:{
               type: DataTypes.STRING,
               allowNull: false,
          },
          category:{
               type: DataTypes.INTEGER,
               allowNull: false
          },
          brand:{
               type: DataTypes.STRING,
               allowNull: false,
          },
          description:{
               type: DataTypes.STRING,
               allowNull: false
          },
          price:{
               type: DataTypes.INTEGER,
               allowNull: false
          },
          active:{
               type: DataTypes.BOOLEAN,
               allowNull: false,
          }
    }

    const Product = sequelize.define(alias, cols, config);
    
    Product.associate = function(models) {
          Product.belongsToMany(models.Image, {
               as: 'images',
               through: 'imagesProducts',
               foreignKey: 'product',
               otherKey: 'image'
          })

          Product.belongsTo(models.Category, {
               as: 'category',
               foreignKey: 'category',
          })

          Product.belongsTo(models.Brand, {
               as: 'brand',
               foreignKey: 'brand',
          })
     }
    return Product;
}