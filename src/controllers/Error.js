
module.exports = {
    async notFound (req, res, next) {
        res.render('off', { title: 'Erro' });
    }
}