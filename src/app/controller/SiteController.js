class SiteController {
  // render home page
  showHome(req, res) {
    res.render('home');
  }

  // render search page
  showSearch(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
