/* GET Meals view */
const meals = (req, res) => {
    res.render('meals', { Meals: true, title: 'Travlr Getaways'});
};

module.exports = {
    meals
};