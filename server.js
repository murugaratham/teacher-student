if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}
const express = require("express");
const bodyParser = require("body-parser");

const helmet = require("helmet");

const errorHandler = (err, req, res, next) => {
  res.status(500).send({ error: "General exception" });
};

const logErrors = (err, req, res, next) => {
  console.error(err.stack);
  next(err);
};

const app = express();
app.use(bodyParser.json());
app.use(helmet());
app.use(logErrors);
app.use(errorHandler);

// load our custom routes..
app.use("/api", require("./routes"));

// catch all other routes
app.all("/api/*", function(req, res) {
  res.sendStatus(404);
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
