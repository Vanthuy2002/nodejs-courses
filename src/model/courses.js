const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userId = Schema.ObjectId;

const Courses = new Schema({
  name: { type: String, maxLength: 255 },
  desc: { type: String, maxLength: 600 },
  img: { type: String, maxLength: 255 },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  slug: { type: String, maxLength: 255 },
});

module.exports = mongoose.model('Course', Courses);
