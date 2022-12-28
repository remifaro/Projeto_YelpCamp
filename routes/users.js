const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users')

router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register));

router.route('/login')
    .get(users.renderLogin) // Esse servira um formulário, será apenas um roteador
    .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login) 
    // Esse será um login, é aqui que faremos o login e tentaremos garantir que suas credenciais sejam válidas.
    // O "passport.authenticate" é um middleware, e este está usando a estratégia local.

router.get('/logout', users.logout)

module.exports = router;
