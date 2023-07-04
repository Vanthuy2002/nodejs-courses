const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Courses = new Schema(
  {
    name: { type: String, maxLength: 255 },
    desc: { type: String, maxLength: 600 },
    img: { type: String, maxLength: 255 },
    slug: { type: String, slug: 'name', unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Course', Courses);
