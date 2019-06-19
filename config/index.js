const _ = require('lodash');

const defaults = {
  env: process.env.NODE_ENV,
  something: 'Default'
};

const env = process.env.NODE_ENV || 'development';

module.exports = _.merge(
  defaults,
  require(`./${env}.js`) || {});
