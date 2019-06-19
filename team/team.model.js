const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Team = sequelize.define('team', {
  id: {type: Sequelize.INTEGER, primaryKey: true},
  name: {type: Sequelize.STRING},
  type: {type: Sequelize.STRING},
  country: {type: Sequelize.STRING},
  featured: {type: Sequelize.BOOLEAN},
}, {
  createdAt: false,
  updatedAt: false,
});

module.exports = Team;