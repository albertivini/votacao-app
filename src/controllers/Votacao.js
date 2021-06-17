import db from '../db'

export default {
    async votar (req, res, next) {
        res.render('votacao', {title: "Paredão BBBXX: Vote para eliminar. Participante1, Participante2 ou Participante3?"})
    },

    async votarNovamente (req, res, next) {
        res.render('votarnovamente', {})
    },

    async participante1 (req, res, next) {
        
        data = Date.now()

        db.adicionaVoto1(data)
        
        res.redirect('/votarnovamente')
    },

    async participante2 (req, res, next) {
        
        data = Date.now()

        db.adicionaVoto2(data)
        
        res.redirect('/votarnovamente')
    },

    async participante3 (req, res, next) {
        
        data = Date.now()

        db.adicionaVoto3(data)
        
        res.redirect('/votarnovamente')
    }
}