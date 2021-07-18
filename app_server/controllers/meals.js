const fs = require('fs');
const mealslist = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
    res.render('meals', { title: 'Travlr Getaways', mealslist });
};

module.exports = {
    meals
};