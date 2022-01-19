const path = require('path');

const index = (req, res) => res.render('index');

const footer = (req, res) => res.render('footer');

module.exports = {index, footer}

