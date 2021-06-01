const express = require('express')
const router = express.Router()
const db = require('../db')

router.post('/', function (req, res) {

    data = Date.now()

    db.adicionaVoto1(data)
    
    res.redirect('/votarnovamente')
})   

module.exports = router
