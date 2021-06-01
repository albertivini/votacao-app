const express = require('express');
const router = express.Router();
const db = require('../db')
const validacao = require('../utils/validacao')

// Rota de Cadastro de usuário
router.get('/', function(req, res, next) {
    if(req.query.fail){
      res.render('signup', { message: "Falha no cadastro do usuário!" })
    } else {
      res.render('signup', { message: null })
    }
    // se der algum erro na requisicao das querys da um fail no front end
  })
  
router.post('/', async function(req, res) {

    try {

      const value = await validacao.schema.validateAsync({ 
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      }) 

      const duplicado = db.findUser(value.email)

      if (duplicado == value.email) {
        res.send("Usuário já cadastrado")
      } else {
        db.createUser(
          value.username, 
          value.password,
          value.email,
          req.body.profile,
          (err, result) => {
            if(err) {
              res.redirect('/signup?fail=true')
            } else {
            require('../utils/mail')(value.email, 'Teste', 'Testando o envio de email')      
            // chama função de enviar email e envia os métodos pra ela.
            res.redirect('/login')        
            }
          }
        )
      }
      } catch (err) {
          res.send("Algum dado passado está fora de acordo com o pedido na hora do cadastro")
          }
})

module.exports = router