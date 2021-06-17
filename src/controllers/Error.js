
export default {
    async notFound (req, res, next) {
        res.render('off', { title: 'Erro' });
    }
}