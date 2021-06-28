const express = require('express')
const router = express.Router()
const passport = require('passport')

const IndexController = require('./controllers/Index')
const SignupController = require('./controllers/Signup')
const LoginController = require('./controllers/Login')
const ErrorController = require('./controllers/Error')
const VotacaoController = require('./controllers/Votacao')
const ExtrasController = require('./controllers/Extras')

const { authenticationMiddleware } = require('./utils/functions')

router.get('/', IndexController.inicio)

router.get('/signup', SignupController.mostra)
router.post('/signup', SignupController.cadastra)
router.get('/forgot', SignupController.mostraRecupera)
router.post('/forgot', SignupController.recupera)

router.get('/login', LoginController.mostra)
router.post('/login', passport.authenticate('local', { successRedirect: '/',
failureRedirect: '/login' }))
router.post('/logout', LoginController.logout)

router.get('/off', ErrorController.notFound)

router.get('/votacao', authenticationMiddleware, VotacaoController.votar)
router.get('/votarnovamente', authenticationMiddleware, VotacaoController.votarNovamente)
router.post('/participante1', authenticationMiddleware, VotacaoController.participante1)
router.post('/participante2', authenticationMiddleware, VotacaoController.participante2)
router.post('/participante3', authenticationMiddleware, VotacaoController.participante3)

router.get('/users', ExtrasController.users)
router.get('/autenticado', authenticationMiddleware, ExtrasController.autenticado)
router.get('/admin', authenticationMiddleware, ExtrasController.admin)

module.exports = router