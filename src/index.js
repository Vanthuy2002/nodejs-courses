const exphbs = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const port = 3456;
const app = express();
// http logger
// app.use(morgan('tiny'));

//static files
app.use(express.static('public'));
// -> localhost:3456/avatar.jpg

//template enginer
const hbs = exphbs.create({ extname: 'hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (request, response) => {
  response.render('home');
});

app.get('/news', (request, response) => {
  response.render('news');
});

app.get('/search', (request, response) => {
  response.render('search');
});

app.listen(port);
