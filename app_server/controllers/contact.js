/* GET Contact view */
const contact = (req, res) => {
    res.render('contact', { Contact: true, title: 'Travlr Getaways'});
};

module.exports = {
    contact
};