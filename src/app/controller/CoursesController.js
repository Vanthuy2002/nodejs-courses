const Courses = require('../../model/courses');
class CoursesController {
  async showDetails(req, res) {
    let course = await Courses.findOne({ slug: req.params.slug }).lean().exec();
    res.render('page/details', { course });
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

  //choose all to submit an action
  async chooseAlltoSubmit(req, res) {
    switch (req.body.actions) {
      case 'delete':
        await Courses.delete({ _id: { $in: req.body.coursesID } });
        res.redirect('back');
        break;

      default:
        res.json({ message: 'This action invalid, try again' });
    }
  }

  //choose all to restore or remover
  async chooseToReStoreOrRemove(req, res) {
    switch (req.body.actions) {
      case 'destroy':
        await Courses.deleteMany({ _id: { $in: req.body.coursesRemove } });
        res.redirect('back');
        break;

      case 'restore':
        await Courses.restore({ _id: { $in: req.body.coursesRemove } });
        res.redirect('/me/dashboard');
        break;
      default:
        res.json({ message: 'This action invalid, try again' });
    }
  }
}

module.exports = new CoursesController();
