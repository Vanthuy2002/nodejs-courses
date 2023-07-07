class NewsController {
  // render page news
  index(req, res) {
    res.render('page/news');
  }

  // render details pages
  showDetails(req, res) {
    res.render('page/details');
  }
}

module.exports = new NewsController();
