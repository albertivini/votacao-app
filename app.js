const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const erroRouter = require('./routes/off');
const autenticadoRouter = require('./routes/autenticado');
const adminRouter = require('./routes/admin');
const signupRouter = require('./routes/signup');
const forgotRouter = require('./routes/forgot')
const votacaoRouter = require('./routes/votacao')
const participante1Router = require('./routes/participante1')
const participante2Router = require('./routes/participante2')
const participante3Router = require('./routes/participante3')
const votarnovamenteRouter = require('./routes/votarnovamente')

const funcao = require('./utils/functions')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Configuração do Passport

const MongoStore = require('connect-mongo')
require('./utils/auth')(passport)
app.use(session({
  store: MongoStore.create({
    db: process.env.MONGO_DB,
    mongoUrl: process.env.MONGO_CONNECTION,
    ttl: 30 * 60 // 30 minutos de sessão
    // configura a entrada da sessao no banco de dados e o tempo de duração da sessão
  }),
  secret: process.env.SESSION_SECRET, //busca um segredo que esta dentro do .env
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 30 * 60 * 1000 } // 30 minutos
}))

app.use(passport.initialize());
app.use(passport.session())

app.use('/', indexRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/forgot', forgotRouter);
app.use('/off', erroRouter)
app.use('/votacao', votacaoRouter);
app.use('/users', funcao.authenticationMiddleware, usersRouter);
app.use('/autenticado', funcao.authenticationMiddleware, autenticadoRouter)
app.use('/admin', funcao.authenticationMiddleware, adminRouter)
app.use('/participante1', funcao.authenticationMiddleware, participante1Router)
app.use('/participante2', funcao.authenticationMiddleware, participante2Router)
app.use('participante3', funcao.authenticationMiddleware, participante3Router)
app.use('/votarnovamente', funcao.authenticationMiddleware, votarnovamenteRouter)

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
