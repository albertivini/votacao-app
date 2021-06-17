import db from '../db'

export default {
    async inicio (req, res, next) {
        res.render('index', { title: 'Express' });
    }
}