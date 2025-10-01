/* GET About view */
const about = (req, res) => {
    res.render('about', { About: true, title: 'Travlr Getaways'});
};

module.exports = {
    about
};