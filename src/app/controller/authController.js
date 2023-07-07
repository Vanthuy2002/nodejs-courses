const Courses = require('../../model/courses');
const { mutilMongooseObject } = require('../../utils/mogooseConfig');

class AuthController {
  // get courses not deleted
  async showDashboard(req, res, next) {
    try {
      let coursesQuery = Courses.find({});

      if (req.query.hasOwnProperty('_sort')) {
        coursesQuery = coursesQuery.sort({
          [req.query.column]: req.query.type,
        });
      }

      const [coursesData, docInDB, allDoc] = await Promise.all([
        coursesQuery,
        Courses.countDocuments(),
        Courses.countDocumentsWithDeleted(),
      ]);

      res.render('auth/Dashboard', {
        coursesData: mutilMongooseObject(coursesData),
        countDeleted: +(allDoc - docInDB),
      });
    } catch (error) {
      next(error);
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
