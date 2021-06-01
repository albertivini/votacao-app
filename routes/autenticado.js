const express = require('express');
const router = express.Router();

// rota para saber se a autenticacao ta funcionando
router.get('/', function(req, res, next) {
  res.render('autenticado', { title: 'Autenticado', profile: req.user.profile });
});

module.exports = router;
