const express = require('express');
const routesOfCourse = express.Router();
const courseCtrl = require('../app/controller/CoursesController');

routesOfCourse.get('/:slug', courseCtrl.showDetails);

module.exports = routesOfCourse;
