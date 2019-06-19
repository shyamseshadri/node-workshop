const handleLogin = (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  if (username === 'admin' && password === 'password') {
    res.json({msg: 'Successful Login'});
  } else {
    res.status(400).send({msg: 'FAILED Login'});
  }
}

module.exports = {
  handleLogin,
};