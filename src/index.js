const exphbs = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const port = 3456;
const app = express();
// http logger
app.use(morgan('tiny'));

//static files
app.use(express.static('public'));
// -> localhost:3456/avatar.jpg

//template enginer
const hbs = exphbs.create({ extname: 'hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (rep, res) => {
  res.render('news');
});

app.listen(port);
