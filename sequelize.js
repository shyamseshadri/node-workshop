const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://cmzsiopw:ko-ZYS9gQh__JJqFaQGYQ5G2L2Q5Y6Yx@john.db.elephantsql.com:5432/cmzsiopw');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  module.exports = sequelize;