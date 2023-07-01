const routesOfNews = require('./news');
const routesOfSite = require('./site');

function routing(app) {
  app.use('/news', routesOfNews);

  app.use('/', routesOfSite);

  app.post('/search', (request, response) => {
    response.render('search');
    console.log(request.body);
  });
}

module.exports = routing;

//app dùng routesOfNews cho path '/news', routeOfSite cho path "/";
