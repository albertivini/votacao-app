const express = require('express');
const router = express.Router();
const db = require('../db')
const validacao = require('../validacao')

// Rota de Cadastro de usuário
router.get('/', function(req, res, next) {
    if(req.query.fail){
      res.render('signup', { message: "Falha no cadastro do usuário!" })
    } else {
      res.render('signup', { message: null })
    }
    // se der algum erro na requisicao das querys da um fail no front end
  })
  
router.post('/', function(req, res) {

      db.createUser(
        req.body.username,
        req.body.password,
        req.body.email,
        req.body.profile,
        // busca do front as informações 
        (err, result) => {
          if(err) {
            res.redirect('/signup?fail=true')
          } else {
          require('../mail')(req.body.email, 'Teste', 'Testando o envio de email')      
          // chama função de enviar email e envia os métodos pra ela.
          res.redirect('/')        
          } // callback
        }
      )
  })

module.exports = router