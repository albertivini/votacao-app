const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const session = require('express-session');

const funcao = require('./utils/functions')

const router = require('./routes.js')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));


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

app.use(router)

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
