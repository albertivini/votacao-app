const express = require('express');
const router = express.Router()

router.get('/', function(req, res) {
    res.render('votacao', {title: "Paredão BBBXX: Vote para eliminar. Participante1, Participante2 ou Participante3?"})
})

module.exports = router