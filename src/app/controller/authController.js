const Courses = require('../../model/courses');
const { mutilMongooseObject } = require('../../utils/mogooseConfig');

class AuthController {
  async showDashboard(req, res, next) {
    try {
      const coursesData = await Courses.find({}).lean().exec();
      res.render('auth/Dashboard', { coursesData});
    } catch (error){
      console.log(error);
    }
  }

  // use filter to get courses with conditions {deleted : true}
  showTrash(req, res, next) {
    Courses.findDeleted({}).then(coursesRemove => {
      let coursesFilter = coursesRemove.filter(course => course.deleted === true);
      res.render("auth/Trash", {coursesFilter : mutilMongooseObject(coursesFilter)})
    }).catch(next)
  }
}

module.exports = new AuthController();
