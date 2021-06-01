function generatePassword() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let pass = ''
    for( let i = 0; i < 10; i++ ) {
        pass += chars.charAt(Math.random() * 61)
        // chatAt = escolhe uma letra usando como método um numero randomico escolhido pelo Math
    }
    return pass
}

module.exports = { generatePassword }