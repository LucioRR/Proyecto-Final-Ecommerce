module.exports = (sequelize, DataTypes) => {
     let alias = 'Product';
     let cols = {
          id:{
               type: DataTypes. INTEGER,
               autoIncrement: true,
               primaryKey: true,
          },
          name:{
               type: DataTypes.STRING(80),
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
               type: DataTypes.DECIMAL,
               allowNull: false
          },
          active:{
               type: DataTypes.BOOLEAN,
               allowNull: false,
          }
     }

     let config = {
          tableName: 'products',
          timestamps: false
     }
     const Product = sequelize.define(alias, cols, config);
    
     Product.associate = function(models) {
          Product.belongsToMany(models.Image, {
               as: 'images',
               through: 'imagesProducts',
               foreignKey: 'product',
               otherKey: 'image',
               timestamps: false
          })

          Product.belongsTo(models.Category, {
               as: 'category_id',
               foreignKey: 'category',
          })

          Product.belongsTo(models.Brand, {
               as: 'brand_id',
               foreignKey: 'brand',
          })
     }
     return Product;
}