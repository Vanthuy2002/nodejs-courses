const fs = require('fs');

const rs = fs.createReadStream('src/text/about.txt', { encoding: 'utf8' });
// read file about.txt

const ws = fs.createWriteStream('src/text/newAbout.txt');
// create new file -> newAbout.txt

rs.on('data', (dataChunk) => {
  // dataChunk is text in file about.txt
  console.log(dataChunk);
  ws.write(dataChunk);
});
