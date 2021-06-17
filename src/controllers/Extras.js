import db from '../db'

export default {
    async users (req, res, next) {
        try {
            const count = await db.countAll()
            // mostra contagem de todos os usuarios dentro do banco
            res.render('users', { count })
          } catch (err) {
            next(err)
          }
    },
    async admin (req, res, next) {
        try {
            const count1 = await db.contarP1()
            const count2 = await db.contarP2()
            const count3 = await db.contarP3()
    
            res.render('admin', { count1, count2, count3 })
        } catch (err) {
            next(err)
        }
    
    },
    async autenticado (req, res, next) {
        res.render('autenticado', { title: 'Autenticado', profile: req.user.profile });
    }
}