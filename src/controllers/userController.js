const path = require('path');

const login = (req, res) => res.render('users/login');
const register = (req, res) => res.render('users/register');

module.exports = {register,login}