const bcryptjs = require('bcryptjs')
const user = require('../models/user');
const {validationResult} = require('express-validator'); 
const { findByField } = require('../models/user');
const router = require('../routes/user');

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
    processLogin: (req, res) => {
        let userToLogin = user.findByField('email', req.body.email);
        if (userToLogin){
            let okPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (okPassword){
                delete userToLogin.password;
                delete userToLogin.confirm_password            
                req.session.userLogged = userToLogin; 

                if(req.body.remember_user){
                    res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
                }
                
                return res.redirect('/users/profile')
            }
            return res.render('users/login', {
                errors:{
                    email:{
                        msg: 'Las credenciales no son validas'
                    }
                }
            });
        } 
        return res.render('users/login', {
            errors:{
                email:{
                    msg: 'El email no se encuentra en nuestra bases de datos'
                }
            }
        });
    },
    
    profile: (req, res) => {
        return res.render('users/userProfile', {   
        user: req.session.userLogged
        })
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/')    
    }
}


module.exports = userController;
