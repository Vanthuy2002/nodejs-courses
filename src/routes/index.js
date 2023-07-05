const routesOfCourse = require('./course');
const routesOfNews = require('./news');
const routesOfSite = require('./site');
const routesOfAuth = require('./auth');

function routing(app) {
  app.use('/news', routesOfNews);

  app.use('/courses', routesOfCourse);

  app.use('/', routesOfSite);

  app.use('/me', routesOfAuth);
}

module.exports = routing;

//app dùng routesOfNews cho path '/news', routeOfSite cho path "/";
