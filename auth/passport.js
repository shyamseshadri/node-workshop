const passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    _ = require('lodash');

const users = [
  {username: 'admin', password: 'password'},
  {username: 'test', password: 'test'},
  {username: 'shyam', password: 'seshadri'}
];

passport.use(new LocalStrategy(
  (username, password, done) => {
    var user = _.find(users, {username: username});
    if (!user) {
      return done(null, false, { msg: 'Incorrect username.' });
    }
    if (user.password !== password) {
      return done(null, false, { msg: 'Incorrect password.' });
    }
    return done(null, user);
  }
));


passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  var user = _.find(users, {username: username});
  if (user) {
    done(null, user);
  } else {
    done('Unable to find user - ' + username);
  }
});
