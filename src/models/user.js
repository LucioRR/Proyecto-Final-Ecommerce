//const {all, generate, create, findByField, findByPK, trash} = require('../models/user');
const{readFileSync, writeFileSync,unlinkSync,existsSync} = require("fs")
const path = require('path');

const userModels = {
    file: path.join(__dirname, '../data/users.json'),
    read: () => readFileSync(userModels.file,"utf-8"),
    list: () => JSON.parse(userModels.read()),
    convert: data => JSON.stringify(data,null,2),
    write: data => writeFileSync(userModels.file, userModels.convert(data)),
    all: () => userModels.list().filter(user => user.activo !== undefined),
    findAll: () => {return userModels.list()},
    findByField: (field,key) => userModels.findAll().find(user => user[field] == key),
    findByPk: (id) => {
        let allUsers = userModels.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id);
        return userFound;
    },
    generateId: () => userModels.list().length > 0 ? userModels.list().sort((a,b) => a.id < b.id ? -1: a.id > b.id ? 1 : 0).pop().id + 1 : 1,    
    create: data => {
        let allUsers = userModels.findAll();
        let newUser = {
            id: userModels.generateId(),
            ...data
        }
        allUsers.push(newUser);
        userModels.write(allUsers);
        return newUser;
    // },
    // delete : (id) => {
    //     let allUsers = userModels.findAll();
    //     let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
    //     userModels.write(finalUsers);
    //     return true;
    } 
}

module.exports = userModels;