const mongoose = require('mongoose');

async function connectDb() {
  try {
    await mongoose.connect('mongodb://localhost:27017/Courses-Server');
    console.log('Connect successfully');
  } catch (error) {
    console.log(error);
  }
}

module.exports = { connectDb };
