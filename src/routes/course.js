const express = require('express');
const routesOfCourse = express.Router();
const courseCtrl = require('../app/controller/CoursesController');

routesOfCourse.get('/create', courseCtrl.showCreatePage);

routesOfCourse.get('/:id/update', courseCtrl.showUpdatePage);

routesOfCourse.put('/:id', courseCtrl.updateAction);

routesOfCourse.patch('/:id/restore', courseCtrl.restoreAction);

routesOfCourse.delete('/:id/destroy', courseCtrl.permanentlyDestroy);

routesOfCourse.delete('/:id', courseCtrl.deleteAction);

routesOfCourse.post('/store', courseCtrl.PostCreatePage);

routesOfCourse.get('/:slug', courseCtrl.showDetails);

module.exports = routesOfCourse;
