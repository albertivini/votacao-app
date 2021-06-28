const User = require('../models/User')
const Vote = require('../models/Vote')

module.exports = {
    async users (req, res, next) {
        try {
            // const count = await User.countAll()
            // mostra contagem de todos os usuarios dentro do banco

            const users = await User.findUsers()

            res.render('users', { users })
          } catch (err) {
            console.log(err)
          }
    },
    async admin (req, res, next) {
        try {
            const count1 = await Vote.contarP1()
            const count2 = await Vote.contarP2()
            const count3 = await Vote.contarP3()
    
            res.render('admin', { count1, count2, count3 })
        } catch (err) {
            next(err)
        }
    
    },
    async autenticado (req, res, next) {
        res.render('autenticado', { title: 'Autenticado', profile: req.user.profile });
    }
}