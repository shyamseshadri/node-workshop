
const fs = require('fs');

let teams = [];

module.exports = {
  getTeams: function(cb) {
    if (teams.length !== 0) {
      return cb(null, teams);
    }
    fs.readFile('data/teams.json', 'UTF-8', (err, data) => {
      teams = JSON.parse(data);
      cb(null, teams);
    })

  },
  getTeam: function(i, cb) {
    if (teams.length !== 0) {
      return cb(null, teams[i]);
    }
    fs.readFile('data/teams.json', 'UTF-8', (err, data) => {
      teams = JSON.parse(data);
      cb(null, teams[i]);
    })
  },
  loadMoreData: function(team, cb) {
    fs.readFile(`data/team-${team.id}.json`, 'UTF-8', (err, data) => {
      cb(null, JSON.parse(data));
    });
  }
};
