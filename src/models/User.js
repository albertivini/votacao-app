const mongoose = require('mongoose')
const bcrypt = require("bcryptjs")

mongoose.connect(process.env.MONGO_CONNECTION)

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    profile: String
}, { collection: 'users'})

async function createUser(username, password, email, profile)  {
    const cryptPwd = bcrypt.hashSync(password, 10)
    // codifica a senha do login em formato hash
    // 10 = numero de rounds que o salt vai fazer

    const Users = mongoose.model('users', userSchema, 'users')
    const user = new Users({ username, password: cryptPwd, email, profile })

    await user.save()

    // global.db.collection('users').insert({ username, password: cryptPwd, email, profile },
    //     function (err, result) {
    //     callback(err, result)
    //     // função de inserir no banco os dados cadastrados
    // })
}

async function findUser(email) {

    const Users = mongoose.model('users', userSchema, 'users')

    const docs = await Users.findOne({email}).exec()

    return docs
    // global.db.collection('users').findOne({email}, callback)
    // // busca email no banco de dados
}

async function findUsers() {

    const users = await mongoose.model('users', userSchema, 'users').find({})

    return users

}

async function changePassword(email, password) {
    const cryptPwd = bcrypt.hashSync(password, 10)

    await mongoose.model('users', userSchema, 'users').updateOne({email}, {$set: {password: cryptPwd}})
    // global.db.collection('users').updateOne({email}, {$set: {password: cryptPwd}})
    // // atualiza a senha no banco de dados
}

async function countAll() {

    const contagem = await mongoose.model('users', userSchema, 'users').countDocuments()

    return contagem
    // return global.db.collection('users').countDocuments()
    // // retorna todos os usuarios dentro do banco
}

module.exports = { createUser, findUser, changePassword, countAll, findUsers }