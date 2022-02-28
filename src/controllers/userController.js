const bcryptjs = require('bcryptjs')
const user = require('../models/user');
const {validationResult} = require('express-validator'); 
const { findByField } = require('../models/user');

const userController = {
    register: (req, res) => res.render('users/register'),
    processRegister: (req, res) =>{
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0){
            return res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
        let userInDB = user.findByField('email', req.body.email);

        if(userInDB) {
            return res.render('users/register', {
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body,
            });
        }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        user.create(userToCreate);
        return res.render('users/login')
    },
    login: (req, res) => res.render('users/login'),
    profile: (req, res) => res.render('users/userProfile',{user:findByField("id",id)}),
    //edit: (req, res) => res.render('users/userEdit')
}

module.exports = userController;