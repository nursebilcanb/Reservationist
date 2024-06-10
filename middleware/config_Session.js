const session = require('express-session');

const configSession = session({
  secret: 'cb723743-6c50-4fdc-9b77-9b9634b2874b',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 1 },
});

module.exports = configSession;