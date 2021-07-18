const fs = require('fs');

const roomslist = JSON.parse(fs.readFileSync('./data/roomslist.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
    res.render('rooms', { title: 'Travlr Getaways', roomslist });
};

module.exports = {
    rooms
};