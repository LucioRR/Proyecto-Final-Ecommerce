module.exports = (sequelize, DataTypes) => {

    let alias = "Size"
    let cols = {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
        size: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }    

    let config = {
        tableName: 'sizes',
        timestamps: false
    }

    const Size = sequelize.define(alias, cols, config);
      
    Size.associate = function(models) {
        Size.hasMany(models.Stock, {
            as: 'products',
            foreignKey: 'size'
        });
    }
    
    return Size;
}    