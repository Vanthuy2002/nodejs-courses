const express = require('express');
const routesOfCourse = express.Router();
const courseCtrl = require('../app/controller/CoursesController');

routesOfCourse.get('/create', courseCtrl.showCreatePage);

routesOfCourse.post('/store', courseCtrl.PostCreatePage);

routesOfCourse.get('/:slug', courseCtrl.showDetails);

module.exports = routesOfCourse;
