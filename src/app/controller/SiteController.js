const myCourses = require('../../model/courses');
class SiteController {
  // render home page
  // render -> params 2 -> valid with object;
  // get all courses with deleteAt : null -> lấy ra course với điều kiện deleteAt === null
  async showHome(req, res) {
    try {
      let data = await myCourses
        .find({}, 'name desc img createAt updateAt slug')
        .lean()
        .exec();
      res.render('page/home', { data });
    } catch (error) {
      console.log(error);
    }
  }

  // render search page
  showSearch(req, res) {
    res.render('page/search');
    console.log(req.body);
  }
}

module.exports = new SiteController();
