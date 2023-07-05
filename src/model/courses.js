const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

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
// add plugin
mongoose.plugin(slug);
Courses.plugin(mongooseDelete, { deletedAt: true, overrideMethods: true });

module.exports = mongoose.model('Course', Courses);
