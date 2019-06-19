const express = require('express');
const passport = require('passport');
const loginRouter = express.Router();

loginRouter.post('/login', passport.authenticate('local'), (req, res) => {

  res.send({msg: 'Successful Login', username: req.user.username});

});


module.exports = loginRouter;
