const exphbs = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const PORT = 3456;
const app = express();
const fs = require('fs');
const fsProMises = require('fs').promises;
const routing = require('./routes');
const { connectDb } = require('./config/db');

// http logger
// app.use(morgan('tiny'));

//static files
app.use(express.static('public'));

// apply midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//template enginer
const hbs = exphbs.create({ extname: 'hbs' });
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

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

// routes init
routing(app);
connectDb();

app.listen(PORT);
