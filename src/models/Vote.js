const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_CONNECTION)

const participante1Schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    profile: String
}, { collection: 'participante1'})

const participante2Schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    profile: String
}, { collection: 'participante2'})

const participante3Schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    profile: String
}, { collection: 'participante3'})


async function adicionaVoto1(data) {

    const Adiciona = mongoose.model('participante1', participante1Schema, 'participante1')
    const adiciona1 = new Adiciona({data})

    await adiciona1.save()
    
    // global.db.collection('participante1').insert({data})
}

async function adicionaVoto2(data) {

    const Adiciona = mongoose.model('participante2', participante2Schema, 'participante2')
    const adiciona2 = new Adiciona({data})

    await adiciona2.save()

    // global.db.collection('participante2').insert({data})
}

async function adicionaVoto3(data) {

    const Adiciona = mongoose.model('participante3', participante3Schema, 'participante3')
    const adiciona3 = new Adiciona({data})

    await adiciona3.save()

    // global.db.collection('participante3').insert({data})
}

async function contarP1() {

    return await mongoose.model('participante1', participante1Schema, 'participante1').countDocuments()

    // return global.db.collection('participante1').countDocuments()
}

async function contarP2() {

    return await mongoose.model('participante2', participante2Schema, 'participante2').countDocuments()

    // return global.db.collection('participante2').countDocuments()
}

async function contarP3() {

    return await mongoose.model('participante3', participante3Schema, 'participante3').countDocuments()

    // return global.db.collection('participante3').countDocuments()
}

module.exports = { adicionaVoto1, adicionaVoto2, adicionaVoto3, contarP1, contarP2, contarP3 }