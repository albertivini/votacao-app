const bcrypt = require('bcryptjs')

function createUser(username, password, email, profile, callback)  {
    const cryptPwd = bcrypt.hashSync(password, 10)
    // codifica a senha do login em formato hash
    // 10 = numero de rounds que o salt vai fazer
    global.db.collection('users').insert({ username, password: cryptPwd, email, profile },
        function (err, result) {
        callback(err, result)
        // função de inserir no banco os dados cadastrados
    })
}

function findUser(email, callback) {
    global.db.collection('users').findOne({email}, callback)
    // busca email no banco de dados
}

function changePassword(email, password) {
    const cryptPwd = bcrypt.hashSync(password, 10)
    global.db.collection('users').updateOne({email}, {$set: {password: cryptPwd}})
    // atualiza a senha no banco de dados
}

function adicionaVoto1(data) {
    global.db.collection('participante1').insert({data})
}

function adicionaVoto2(data) {
    global.db.collection('participante2').insert({data})
}

function adicionaVoto3(data) {
    global.db.collection('participante3').insert({data})
}

function countAll() {
    return global.db.collection('users').countDocuments()
    // retorna todos os usuarios dentro do banco
}

function contarP1() {
    return global.db.collection('participante1').countDocuments()
}

function contarP2() {
    return global.db.collection('participante2').countDocuments()
}

function contarP3() {
    return global.db.collection('participante3').countDocuments()
}

module.exports = { createUser, findUser, changePassword, countAll, adicionaVoto1, adicionaVoto2, adicionaVoto3, contarP1, contarP2, contarP3 }