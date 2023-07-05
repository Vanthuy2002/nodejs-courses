const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const PORT = 3456;
const methodOverride = require('method-override');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');
const fsProMises = require('fs').promises;
const routing = require('./routes');
const { connectDb } = require('./config/db');

//static files
app.use(express.static('public'));

// apply midleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// override method
app.use(methodOverride('_method'));

//template enginer
const hbs = exphbs.create({
  extname: 'hbs',
  helpers: { sumIndex: (a, b) => a + b },
});
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
// connected MongoDB
connectDb();

app.listen(PORT);
