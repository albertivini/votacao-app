const express = require('express');
const router = express.Router()

router.get('/', function(req, res) {
    res.render('votacao', {title: "BIG BROTHER BRASIL"})
})

module.exports = router