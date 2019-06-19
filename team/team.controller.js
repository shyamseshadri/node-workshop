
var fs = require('fs');

module.exports = {
  getTeams: function(cb) {
    fs.readFile('data/teams.json', 'UTF-8', function(err, data) {
      cb(null, JSON.parse(data));
    });
  },
  addMoreData: function(team, cb) {
    fs.readFile(`data/team-${team.id}.json`, 'UTF-8', function(err, data) {
      cb(null, JSON.parse(data));
    });
  }
};
