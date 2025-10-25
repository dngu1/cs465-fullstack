var fs = require('fs');
var mealData = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET Meals view */
const meals = (req, res) => {
    res.render('meals', { Meals: true, title: 'Travlr Getaways', mealData});
};

module.exports = {
    meals
};