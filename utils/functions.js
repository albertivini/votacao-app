function generatePassword() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let pass = ''
    for( let i = 0; i < 10; i++ ) {
        pass += chars.charAt(Math.random() * 61)
        // chatAt = escolhe uma letra usando como método um numero randomico escolhido pelo Math
    }
    return pass
}

// bloquea usuario nao autenticado
function authenticationMiddleware(req, res, next) {
    if (req.isAuthenticated() && require('./permissions')(req))
    // se o usuario tiver autenticado e a funcao do permissions der TRUE ele consegue seguir adiante, se não ele é direcionado para /off
    return next()
    res.redirect('/off')
  }

module.exports = { generatePassword, authenticationMiddleware }

