
// Sequential, sync
const fs = require('fs');

const teams = JSON.parse(fs.readFileSync('data/teams.json'));

for (let i = 0; i < teams.length; i++) {
  teams[i].more = JSON.parse(fs.readFileSync(`data/team-${teams[i].id}.json`));
}

console.log('Fully loaded teams ', teams);
