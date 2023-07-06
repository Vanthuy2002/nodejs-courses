const Courses = require('../../model/courses');
const { mutilMongooseObject } = require('../../utils/mogooseConfig');

class AuthController {
  // get courses not deleted
  async showDashboard(req, res) {
    try {
      const coursesData = await Courses.find({}).lean().exec();
      const allDocs = await Courses.countDocumentsWithDeleted();
      const docInDB = await Courses.countDocuments();
      const docRemoves = +(allDocs - docInDB);
      res.render('auth/Dashboard', { coursesData, docRemoves });
    } catch (error) {
      console.log(error);
    }
  }

  // use filter to get courses with conditions {deleted : true}
  // countDocuments works ok! -> return doc not deleted
  // countDocummentsDeleted work NOT ok! -> return all doc???
  // countDocumentsWithDeleted work ok -> return all doc

  async showTrash(req, res) {
    try {
      const coursesRemove = await Courses.findDeleted({}).exec();
      const countInDashBoard = await Courses.countDocuments();

      let coursesFilter = coursesRemove.filter(
        (course) => course.deleted === true
      );
      res.render('auth/Trash', {
        coursesFilter: mutilMongooseObject(coursesFilter),
        countInDashBoard,
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AuthController();
