const myCourses = require('../../model/courses');
class SiteController {
  // render home page
  async showHome(req, res) {
    res.render('home');
    const data = await myCourses
      .find({}, 'author name desc img createAt updateAt')
      .exec();
    data.forEach((item) => console.log('🚀 item:', item));
  }

  // render search page
  showSearch(req, res) {
    res.render('search');
    console.log(req.body);
  }
}

module.exports = new SiteController();
