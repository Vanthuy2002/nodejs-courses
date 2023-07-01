const express = require('express');
const routesOfNews = express.Router();
const newsCtrl = require('../app/controller/NewController');

// route will be matching up -> down, root route must be the lastest route
routesOfNews.use('/:slug', newsCtrl.showDetails);

routesOfNews.use('/', newsCtrl.index);
// or like this -> routesOfNews.use((req, res) => res.render('news/'));

module.exports = routesOfNews;
