
const fs = require('fs');
const teamModel = require('./team.model');

module.exports = {
  getTeams: function(cb) {
    teamModel.findAll().then(teams => {
      cb(null, teams);
    });
  },
  addMoreData: function(team, cb) {
    fs.readFile(`data/team-${team.id}.json`, 'UTF-8', function(err, data) {
      cb(null, JSON.parse(data));
    });
  }
};
