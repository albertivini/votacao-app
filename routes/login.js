const express = require('express');
const passport = require('passport');
const router = express.Router()

router.get('/', (req, res, next) => {
    if(req.query.fail)
        res.render('login', {message: 'Usuario e/ou senha incorretos!'})
    else
        res.render('login', {message: null })
})

router.post('/',
    passport.authenticate('local', {
        successRedirect: '/users',
        failureRedirect: '/login?fail=true'
    })
    // autentica o login
)

// rota post de logout que pode ficar em qualquer arquivo, só chamar o path certo.
router.post('/logout', function (req, res) {
    if (req.isAuthenticated) {
        req.logOut()
        // função de dar logoff e destruir a sessão
        res.redirect('/login')
    }
})
  
module.exports = router
