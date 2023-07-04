const routesOfCourse = require('./course');
const routesOfNews = require('./news');
const routesOfSite = require('./site');

function routing(app) {
  app.use('/news', routesOfNews);

  app.use('/courses', routesOfCourse);

  app.use('/', routesOfSite);
}

module.exports = routing;

//app dùng routesOfNews cho path '/news', routeOfSite cho path "/";
