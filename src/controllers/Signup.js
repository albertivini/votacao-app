import db from '../db'
import validacao from '../utils/validacao'

export default {
    async mostra (req, res, next) {
        if(req.query.fail){
            res.render('signup', { message: "Falha no cadastro do usuário!" })
          } else {
            res.render('signup', { message: null })
          }
          // se der algum erro na requisicao das querys da um fail no front end
    },
    
    async cadastra (req, res, next) {
        
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
    },

    async mostraRecupera (req, res, next) {
        res.render('forgot', { title: 'Recuperação de Senha', message: null })
    },

    async recupera (req, res, next) {
        
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
    }

}
