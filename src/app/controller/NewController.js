class NewsController {
  // render page news
  index(req, res) {
    res.render('news');
  }

  // render details pages
  showDetails(req, res) {
    res.render('details');
  }
}

module.exports = new NewsController();
