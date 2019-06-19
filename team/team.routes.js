const express = require('express');
const teamCtrl = require('./team.controller');

const teamRouter = express.Router();

const isLoggedIn = (req, res, next) => {
  if (req.user) {
    return next();
  }
  return res.status(401).json({msg: 'Unauthorized'});
}

teamRouter.get('/', isLoggedIn, (req, res) => {
  req.session.permission = true;
  teamCtrl.getTeams((err, teams) => {
    res.status(200).json(teams);
  });
});

teamRouter.get('/:id', (req, res) => {
  if (!req.session.permission) {
    return res.status(401).json({msg: 'Need to view teams list first'});
  }
  const id = Number(req.params.id);
  teamCtrl.getTeams((err, teams) => {
    teamCtrl.addMoreData(teams[id - 1], function (err, teamData) {
      teams[id - 1].more = teamData;
      res.json(teams[id - 1]);
    });
  });
});

module.exports = teamRouter;