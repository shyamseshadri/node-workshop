
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const teamCtrl = require('./team/team.controller');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())

app.get('/api/teams', (req, res) => {
  teamCtrl.getTeams((err, teams) => {
    res.status(200).json(teams);
  });
});

app.get('/api/teams/:id', (req, res) => {
  const id = Number(req.params.id);
  teamCtrl.getTeams((err, teams) => {
    teamCtrl.addMoreData(teams[id - 1], function (err, teamData) {
      teams[id - 1].more = teamData;
      res.json(teams[id - 1]);
    });
  });
});

app.post('/api/login', (req, res) => {
  var username = req.body.username;
  var password = req.body.password;
  if (username === 'admin' && password === 'password') {
    res.json({msg: 'Successful Login'});
  } else {
    res.status(400).send({msg: 'FAILED Login'});
  }
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});





