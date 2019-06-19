
const teamCtrl = require('./team/team.controller');

teamCtrl.getTeams((err, teams) => {
  console.log('All Teams', teams);
});

teamCtrl.getTeam(0, (err, team) => {
  console.log('First Team', team);
});

teamCtrl.getTeam(2, (err, team) => {
  console.log('Third Team', team);
});

console.log('Done with file');
