const path = require('path');
const fsProMises = require('fs').promises;
const { v4: uuidV4 } = require('uuid');
const { format } = require('date-fns');

const logEvents = async (mess) => {
  const dateTime = `${format(new Date(), 'yyyy/MM/dd\tHH:mm:ss')}`;
  const logItems = `${dateTime}\t${uuidV4()}\t${mess}\n`;
  try {
    await fsProMises.appendFile(
      path.join(__dirname, '', 'events.txt'),
      logItems
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = logEvents;
