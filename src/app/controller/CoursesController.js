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
    res.redirect('/me/dashboard');
  }

  // PUT method
  async updateAction(req, res) {
    await Courses.updateOne({ _id: req.params.id }, req.body);
    res.redirect('/me/dashboard');
  }

  // DELETE method -> libs
  async deleteAction(req, res) {
    await Courses.delete({ _id: req.params.id });
    res.redirect('back');
  }

  // PATCH -> RESTORE method
  async restoreAction(req, res) {
    await Courses.restore({ _id: req.params.id });
    res.redirect('/me/dashboard');
  }

  //PERMANENTLY deleted => courses/:id/destroy -> mongo
  async permanentlyDestroy(req, res) {
    await Courses.deleteOne({ _id: req.params.id });
    res.redirect('back');
  }
}

module.exports = new CoursesController();
