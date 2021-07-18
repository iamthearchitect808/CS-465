const fs = require('fs');

const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

/* GET news view */
const about = (req, res) => {
    res.render('about', { title: 'Travlr Getaways', trips });
};

module.exports = {
    about
};