const path = require('path');

const login = (req, res) => res.render('login');
const register = (req, res) => res.render('register');

module.exports = {register,login}