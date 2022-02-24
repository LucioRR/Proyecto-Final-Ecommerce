const user = require('../models/user');
const {validationResult} = require('express-validator'); 

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

        let userToCreate = {
            ...req.body,
            avatar: req.file.filename
        }

        user.create(userToCreate);
        return res.render('users/userProfile')
    },
    login: (req, res) => res.render('users/login'),
    profile: (req, res) => res.render('users/userProfile'),
    //edit: (req, res) => res.render('users/userEdit')
}

module.exports = userController;