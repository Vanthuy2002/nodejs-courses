const express = require('express');
const routesOfSite = express.Router();
const siteCtrl = require('../app/controller/SiteController');

// route will be matching up -> down, root route must be the lastest route
routesOfSite.use('/search', siteCtrl.showSearch);

routesOfSite.use('/', siteCtrl.showHome);
// or like this -> routesOfNews.use('/', (req, res) => res.render('home'));

module.exports = routesOfSite;
