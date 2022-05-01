module.exports = (sequelize, DataTypes) => {

    let alias = "Color"
    let cols = {
        id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }    

    let config = {
        tableName: 'colors',
        timestamps: false
    }

    const Color = sequelize.define(alias, cols, config);
    
    Color.associate = function(models){
        Color.hasMany(models.Stock, {
            as: 'stock',
            foreignKey: 'color'
        });
    }
    
    return Color;
}    