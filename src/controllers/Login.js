const passport = require('passport')

module.exports = {
    async mostra (req, res, next) {
        if(req.query.fail)
        res.render('login', {message: 'Usuario e/ou senha incorretos!'})
    else
        res.render('login', {message: null })
    },

    async logout (req, res, next) {
        if (req.isAuthenticated) {
            req.logOut()
            // função de dar logoff e destruir a sessão
            res.redirect('/login')
        }   
    }
}