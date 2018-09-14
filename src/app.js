if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errorHandler, logErrors } = require('./handlers');

const app = express();
const middlewares = [bodyParser.json(), helmet(), logErrors, errorHandler];
app.use(...middlewares);

/**
 * Load custom routes
 */
app.use('/api', require('./routes'));

/**
 * Catch all route and respond with 404
 */
app.all('/api/*', function(req, res) {
  res.status(404).send({ error: 'Page not found' });
});

module.exports = app;
