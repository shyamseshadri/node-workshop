const express = require('express');
const userCtrl = require('./user.controller');
const loginRouter = express.Router();


loginRouter.post('/login', userCtrl.handleLogin);

module.exports = loginRouter;
