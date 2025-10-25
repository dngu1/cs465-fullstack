var fs = require('fs');
var newsData = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

/* GET News view */
const news = (req, res) => {
    res.render('news', { News: true, title: 'Travlr Getaways', newsData});
};

module.exports = {
    news
};