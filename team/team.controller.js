
const fs = require('fs');

let teams = [];

module.exports = {
  getTeams: function() {
    if (teams.length === 0) {
      teams = JSON.parse(fs.readFileSync('teams.json', 'UTF-8'));
    }
    return teams;
  },
  getTeam: function(i) {
    if (teams.length === 0) {
      teams = JSON.parse(fs.readFileSync('teams.json', 'UTF-8'));
    }
    return teams[i];
  }
};
