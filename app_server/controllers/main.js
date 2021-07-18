const fs = require('fs');

const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', trips});
};

module.exports = {
    index
};