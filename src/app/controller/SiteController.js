const myCourses = require('../../model/courses');
const { mutilMongooseObject } = require('../../utils/mogooseConfig');
class SiteController {
  // render home page
  // render -> params 2 -> valid with object;
  async showHome(req, res) {
    try {
      let data = await myCourses
        .find({}, 'name desc img createAt updateAt slug')
        .lean()
        .exec();
      res.render('home', { data });
    } catch (error) {
      console.log(error);
    }
  }

  // render search page
  showSearch(req, res) {
    res.render('search');
    console.log(req.body);
  }
}

module.exports = new SiteController();
