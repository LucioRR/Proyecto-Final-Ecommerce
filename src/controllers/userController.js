const bcryptjs = require('bcryptjs')
const user = require('../models/user');
const {User, Image} = require('../database/models')
const {validationResult} = require('express-validator'); 
const { findByField } = require('../models/user');
const router = require('../routes/user');

const userController = {
    register: (req, res) => res.render('users/register'),
    processRegister: async (req, res) => {
        try {
            const resultValidation = validationResult(req);
            if (resultValidation.errors.length > 0) {
                return res.render('users/register', {
                    errors: resultValidation.mapped(),
                    oldData: req.body
                });
            };
            let userInDB = await User.findOne({where: {email: req.body.email}});
            if (userInDB != null) {
                return res.render('users/register', {
                    errors: {
                        email: {
                            msg : 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            };
            let userAvatarCreated = await Image.create({
                url: req.file.filename
            })
            let userCeated = await User.create({
                email: req.body.email,
                hash: bcryptjs.hashSync(req.body.password, 10),
                avatar:  userAvatarCreated.id,
                admin: false,
                active: true,
            });
            return res.render('users/login');
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    },
    login: (req, res) => res.render('users/login'),
    processLogin: async (req, res) => {
        try {
            let userToLogin = await User.findOne({where: {email: req.body.email}});
            if (userToLogin != null) {
                let okPassword = bcryptjs.compareSync(req.body.password, userToLogin.hash);
                if (okPassword){
                    delete userToLogin.hash;
                    req.session.userLogged = userToLogin;
                    if (req.body.remember_user){
                        res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2});
                    }
                    return res.redirect('/users/profile');
                }
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: 'Las credenciales no son válidas'
                        }
                    }
                });
            }
            return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'El usuario no se encuentra registrado.'
                    }
                }
            });
        } catch (errors) {
            res.status(500).send({message: errors.message})
        } 
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

// const userController = {
//     register: (req, res) => res.render('users/register'),
//     processRegister: (req, res) =>{
//         const resultValidation = validationResult(req);
        
//         if(resultValidation.errors.length > 0){
//             return res.render('users/register', {
//                 errors: resultValidation.mapped(),
//                 oldData: req.body,
//             });
//         }
//         let userInDB = user.findByField('email', req.body.email);

//         if(userInDB) {
//             return res.render('users/register', {
//                 errors: {
//                     email: {
//                         msg: 'Este email ya está registrado'
//                     }
//                 },
//                 oldData: req.body,
//             });
//         }

//         let userToCreate = {
//             ...req.body,
//             password: bcryptjs.hashSync(req.body.password, 10),
//             avatar: req.file.filename
//         }

//         user.create(userToCreate);
//         return res.render('users/login')
//     },
//     login: (req, res) => res.render('users/login'),
    // processLogin: (req, res) => {
    //     let userToLogin = user.findByField('email', req.body.email);
    //     if (userToLogin){
    //         let okPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
    //         if (okPassword){
    //             delete userToLogin.password;
    //             delete userToLogin.confirm_password            
    //             req.session.userLogged = userToLogin; 

    //             if(req.body.remember_user){
    //                 res.cookie('userEmail', req.body.email, {maxAge: (1000 * 60) * 2})
    //             }
                
    //             return res.redirect('/users/profile')
    //         }
    //         return res.render('users/login', {
    //             errors:{
    //                 email:{
    //                     msg: 'Las credenciales no son validas'
    //                 }
    //             }
    //         });
    //     } 
    //     return res.render('users/login', {
    //         errors:{
    //             email:{
    //                 msg: 'El email no se encuentra en nuestra bases de datos'
    //             }
    //         }
    //     });
    // },
    
//     profile: (req, res) => {
//         return res.render('users/userProfile', {   
//         user: req.session.userLogged
//         })
//     },
//     logout: (req, res) => {
//         res.clearCookie('userEmail');
//         req.session.destroy();
//         return res.redirect('/')    
//     }
// }


module.exports = userController;
