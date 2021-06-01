const express = require('express')
const router = express.Router()
const db = require('../db')

// rota para mostrar a view só para admin
router.get('/', async function (req, res) {
    try {
        const count1 = await db.contarP1()
        const count2 = await db.contarP2()
        const count3 = await db.contarP3()

        res.render('admin', { count1, count2, count3 })
    } catch (err) {
        next(err)
    }

})

module.exports = router