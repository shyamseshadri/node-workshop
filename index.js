
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const responseTime = require('response-time');
const session = require('express-session');

const config = require('./config');

const app = express();
const teamRoutes = require('./team/team.routes');
const userRoutes = require('./user/user.routes');

app.use(responseTime());
app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())

app.use(session({
  secret: 'foobar',
}));
app.use('/api', userRoutes);
app.use('/api/teams', teamRoutes);

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
  console.log('CONFIG IS ', config);
});





