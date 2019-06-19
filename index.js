
const teamCtrl = require('./team/team.controller');

const loadTeamData = (team, cb) => {
  teamCtrl.loadMoreData(team, (err, teamData) => {
    team.more = teamData;
    cb();
  });
};

teamCtrl.getTeams((err, teams) => {
  var count = 0;
  for (var i = 0; i < teams.length; i++) {
    loadTeamData(teams[i], () => {
      count++;
      if (count == teams.length) {
        console.log('Fully loaded teams ', teams);
      }
    });
  }
});


console.log('Done with file');