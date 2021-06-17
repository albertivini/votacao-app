import express from 'express';
const router = express.Router()

import IndexController from './controllers/Index'
import SignupController from './controllers/Signup'
import LoginController from './controllers/Login'
import ErrorController from './controllers/Error'
import VotacaoController from './controllers/Votacao'
import ExtrasController from './controllers/Extras'

router.get('/', IndexController.inicio)

router.get('/signup', SignupController.mostra)
router.post('/signup', SignupController.cadastra)
router.get('/forgot', SignupController.mostraRecupera)
router.post('/forgot', SignupController.recupera)

router.get('/login', LoginController.mostra)
router.post('/login', LoginController.autentica)
router.post('/logout', LoginController.logout)

router.get('/off', ErrorController.notFound)

router.get('/votacao', VotacaoController.votar)
router.get('/votarnovamente', VotacaoController.votarNovamente)
router.post('/participante1', VotacaoController.participante1)
router.post('/participante2', VotacaoController.participante2)
router.post('/participante3', VotacaoController.participante3)

router.get('/users', ExtrasController.users)
router.get('/autenticado', ExtrasController.autenticado)
router.get('/admin', ExtrasController.admin)

export default router