module.exports = (sequelize, DataTypes) => {

    let alias = 'User';
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hash: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        avatar:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    }    

    let config = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.Image, {    
        as: 'avatar', 
        foreignKey: 'avatar',
        })

    }    

    return User;
    
}    