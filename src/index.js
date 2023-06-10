const exphbs = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const port = 3456;
const app = express();
const fs = require('fs');
const fsProMises = require('fs').promises;

// http logger
// app.use(morgan('tiny'));

//static files
app.use(express.static('public'));
// -> localhost:3456/avatar.jpg

// apply midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//template enginer
const hbs = exphbs.create({ extname: 'hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//readFile
fs.readFile('src/text/about.txt', 'utf-8', (err, data) => {
  if (err) return null;
  return data;
  // or params utf-8
});

//or this
fs.readFile(path.join(__dirname, 'text', 'lorem.txt'), 'utf-8', (err, data) => {
  return data;
});

//write file
fs.writeFile(
  path.join(__dirname, 'text', 'reply.txt'),
  'Have a good day, sir . This is a text writen by NodeJS',
  (err) => {
    if (err) return null;

    // logic appendFile
    fs.appendFile(
      path.join(__dirname, 'text', 'reply.txt'),
      '. This is text writen and append in reply',
      (err) => {
        if (err) return null;
      }
    );
  }
);

const fileOps = async () => {
  try {
    const data = await fsProMises.readFile(
      path.join(__dirname, 'text', 'reply.txt'),
      'utf-8'
    );
    await fsProMises.writeFile(path.join(__dirname, 'text', 'about.txt'), data);
    await fsProMises.appendFile(
      path.join(__dirname, 'text', 'lorem.txt'),
      `\n\n${data}`
    );
    await fsProMises.rename(
      path.join(__dirname, 'text', 'lorem.txt'),
      path.join(__dirname, 'text', 'newReply.txt')
    );
    // await fsProMise.unlink(path.join(__dirname, 'text', 'test.txt'));
    const newData = await fsProMises.readFile(
      path.join(__dirname, 'text', 'newReply.txt'),
      'utf-8'
    );
  } catch (error) {
    return null;
  }
};

fileOps();

// handle err
process.on('uncaughtException', (err) => {
  console.log('Something has broken,...', err);
  //log err
  process.exit(1);
  // exit the programs
});

app.get('/', (request, response) => {
  response.render('home');
});

app.get('/news', (request, response) => {
  response.render('news');
});

app.get('/search', (request, response) => {
  response.render('search');
});

app.post('/search', (request, response) => {
  response.render('search');
  console.log(request.body);
});

app.listen(port);
