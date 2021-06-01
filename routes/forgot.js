const express = require('express');
const router = express.Router();
const db = require('../db')

// rota get para recuperação de senha
router.get('/', function(req, res) {
    res.render('forgot', { title: 'Recuperação de Senha', message: null })
  })
  
// gera uma nova senha e envia para o email da pessoa

router.post('/', async function(req, res, next) {

      db.findUser(req.body.email, (err, doc) => {
        // busca no banco o email passado pelo cliente
        if(err || !doc) {
          res.redirect('/forgot') 
          // erro para demonstrar que usuario nao foi encontrado
        } else {
          const newpass = require('../utils/functions').generatePassword()
          // gera nova senha e guarda em newpass
          db.changePassword(req.body.email, newpass)
          // atualiza o banco com a nova senha
          require('../utils/mail')(req.body.email, 'Nova senha', 'Olá, sua nova senha é: ' + newpass )
          res.redirect('/forgot')
          // envia e-mail com a senha nova
        }
      })
  })

module.exports = router