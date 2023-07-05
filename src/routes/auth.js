const express = require('express');
const routesOfAuth = express.Router();
const authCtrl = require('../app/controller/authController');

routesOfAuth.get('/trash', authCtrl.showTrash);

routesOfAuth.get('/:slug', authCtrl.showDashboard);

module.exports = routesOfAuth;
