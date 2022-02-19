const {all, generate, create, findByField, findByPK, trash} = require('../models/user');
const {validationResult} = require('express-validator');

const login = (req, res) => res.render('users/login');


const userController = {
    register: (req, res) => res.render('users/register'),
    processRegister: (req, res) =>{
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0){
            res.render('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        res.render('users/userProfile')
    },
    login: (req, res) => res.render('users/login')
}

module.exports = userController;