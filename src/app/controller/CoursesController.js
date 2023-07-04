class CoursesController {
  // render Details page
  showDetails(req, res) {
    res.render('details');
    console.log(req);
  }
}

module.exports = new CoursesController();
