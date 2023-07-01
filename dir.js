const fs = require('fs');

if (!fs.existsSync('./news')) {
  fs.mkdir('./news', (err) => {
    if (err) throw err;
  });
} else {
  fs.rmdir('./news', (err) => null);
}
