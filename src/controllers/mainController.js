const path = require('path');

const index = (req, res) => res.render('index');
const header = (req, res) => res.render('header');
const footer = (req, res) => res.render('footer');

module.exports = {index, footer, header}

