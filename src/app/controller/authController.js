const Courses = require('../../model/courses');

class AuthController {
  async showDashboard(req, res) {
    let coursesData = await Courses.find({}, 'name img createdAt _id slug')
      .lean()
      .exec();
    res.render('auth/Dashboard', { coursesData });
  }
}

module.exports = new AuthController();
