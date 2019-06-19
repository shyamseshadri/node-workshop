
const async = require('async');
const teamCtrl= require('./team/team.controller');

const loadTeamData = (team) => {
  return (cb) => {
    teamCtrl.addMoreData(team, cb)
  };
};

teamCtrl.getTeams((err, teams) => {
  var functionArray = [];
  for (var i = 0; i < teams.length; i++) {
    functionArray.push(loadTeamData(teams[i]));
  }
  async.parallel(functionArray, function(err, teamsExtraInfo) {
    for (var i = 0; i < teams.length; i++) {
      teams[i].more = teamsExtraInfo[i];
    }
    console.log('Teams info is ', teams);
  });
});






