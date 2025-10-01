/* GET News view */
const news = (req, res) => {
    res.render('news', { News: true, title: 'Travlr Getaways'});
};

module.exports = {
    news
};