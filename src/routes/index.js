var router = require('express').Router();

router.use('/register', require('./register'));
// router.use("/commonstudents/:teacher", require("./commonstudents"));

module.exports = router;
