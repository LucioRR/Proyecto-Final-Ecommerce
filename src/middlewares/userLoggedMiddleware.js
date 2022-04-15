const {User} = require('../database/models'); 

module.exports = async (req, res, next) => {
    let user = null
    if(req.cookie && req.cookie.user){
        user = await User.findOne({where: {user: req.cookie.user}})
        req. session.user = user;
    }

    if(req.session.user){
        user = req.session.user;
    }
    res.locals.user = user;
    next();
}

/*const user =  require('../models/user');

function userLoggedMiddleware(req, res, next) {          
    res.locals.isLogged = false 
                                
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = user.findByField('email', emailInCookie);
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }
    
    if (req.session.userLogged){  
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged  
    }                                                   
    
    
    next();
}

module.exports = userLoggedMiddleware;*/