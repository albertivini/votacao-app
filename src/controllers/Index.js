
module.exports = {
    async inicio (req, res, next) {
        res.render('index', { title: 'Express' });
    }
}