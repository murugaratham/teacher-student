/**
 * Error handler middleware, will return http 500 whenever we get uncaught exception
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const errorHandler = (err, req, res, next) => {
  res.status(500).send({ error: 'General exception' });
};

/**
 * Logging middleware, will log exceptions and pass err to next middleware in the pipeline
 * @param {*} err
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const logErrors = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

module.exports = {
  errorHandler,
  logErrors
};
