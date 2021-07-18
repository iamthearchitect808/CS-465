const fs = require('fs');
const newstips = JSON.parse(fs.readFileSync('./data/newstips.json', 'utf8'));
const article = JSON.parse(fs.readFileSync('./data/article.json', 'utf8'));
const newslatest = JSON.parse(fs.readFileSync('./data/newslatest.json', 'utf8'));

/* GET news view */
const news = (req, res) => {
    res.render('news', { title: 'Travlr Getaways', newstips, article, newslatest });
};

module.exports = {
    news
};