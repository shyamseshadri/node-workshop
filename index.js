
const express = require('express');

const app = express();
const teamCtrl = require('./team/team.controller');

app.get('/', (req, res) => {
  teamCtrl.getTeams((err, teams) => {
    res.status(200).json(teams);
  });
});

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});





