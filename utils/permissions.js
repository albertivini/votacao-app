// centralização das regras de validação

const ADMIN_PROFILE = '2'

function isAdmin(profile) {
    return profile === ADMIN_PROFILE
    // confere se o profile q vem do front end (value = 2) é o mesmo que define que o usuario é admin (ADMIN_PROFILE)
}

module.exports = (req) => {
    // da um request no q vem do front
    const user = req.user
    if (!user) return false // usuário anonimo

    const originalUrl = req.originalUrl
    // pega a url
    const profile = req.user.profile
    // pega o profile
    const method = req.method
    // pega o método, da pra usar no futuro travando possiveis metodos apenas para admin

    console.log(originalUrl)

    // switch avalia uma expressao, combinando o valor da expressao para um caso e executa a instrução no case, 
    // o default é o que acontece caso nao a condição nao entre em nenhum case
    // neste caso o switch pega a url e se ela estiver de acordo com a url dentro dos cases ela da um true
    // se o profile do usuario for admin tambem retorna true, caso nao seja retorna false
    switch (originalUrl) {
        case '/': return true
        case '/users': return true
        case '/off': return true
        case '/autenticado': return true
        case '/login': return true
        case '/signup': return true
        case '/votacao': return true
        case '/participante1': return true
        case '/participante2': return true
        case '/participante3': return true
        case '/votarnovamente': return true
        case '/admin': { return isAdmin(profile) }
        default: return false
    }
}