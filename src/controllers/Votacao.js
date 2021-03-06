const Vote = require('../models/Vote')

module.exports = {
    async votar (req, res, next) {
        res.render('votacao', {title: "Paredão BBBXX: Vote para eliminar. Participante1, Participante2 ou Participante3?", part1: "Nick", part2: "Eva", part3: "Fumaça"})
    },

    async votarNovamente (req, res, next) {
        res.render('votarnovamente', {})
    },

    async participante1 (req, res, next) {
        
        data = Date.now()

        Vote.adicionaVoto1(data)
        
        res.redirect('/votarnovamente')
    },

    async participante2 (req, res, next) {
        
        data = Date.now()

        Vote.adicionaVoto2(data)
        
        res.redirect('/votarnovamente')
    },

    async participante3 (req, res, next) {
        
        data = Date.now()

        Vote.adicionaVoto3(data)
        
        res.redirect('/votarnovamente')
    }
}