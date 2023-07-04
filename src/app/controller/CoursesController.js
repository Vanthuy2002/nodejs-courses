const Courses = require('../../model/courses');
class CoursesController {
  async showDetails(req, res) {
    let course = await Courses.findOne({ slug: req.params.slug }).lean().exec();
    res.render('details', { course });
  }

  showCreatePage(req, res) {
    res.render('create');
  }

  // POST method
  async PostCreatePage(req, res) {
    const doc = new Courses(req.body);
    await doc.save();
    res.redirect('/');
  }
}

module.exports = new CoursesController();
