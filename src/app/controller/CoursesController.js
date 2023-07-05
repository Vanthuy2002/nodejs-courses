const Courses = require('../../model/courses');

class CoursesController {
  async showDetails(req, res) {
    let course = await Courses.findOne({ slug: req.params.slug }).lean().exec();
    res.render('details', { course });
  }

  showCreatePage(req, res) {
    res.render('action/create');
  }

  async showUpdatePage(req, res) {
    let doc = await Courses.findById(req.params.id).lean().exec();
    res.render('action/update', { doc });
  }

  // POST method
  async PostCreatePage(req, res) {
    const doc = new Courses(req.body);
    await doc.save();
    res.redirect('/');
  }

  // PUT method
  async updateAction(req, res) {
    await Courses.updateOne({ _id: req.params.id }, req.body);
    res.redirect('/me/dashboard');
  }
}

module.exports = new CoursesController();
