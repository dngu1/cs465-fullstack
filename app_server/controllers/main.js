/* GET Homepage */
const index = (req, res) => {
    res.render('index', {Main: true, title: "Travlr Getaways"});
};

module.exports = {
    index
}