const fs = require('fs');

const aboutads = JSON.parse(fs.readFileSync('./data/aboutads.json', 'utf8'));

/* GET news view */
const about = (req, res) => {
    res.render('about', { title: 'Travlr Getaways', aboutads });
};

module.exports = {
    about
};