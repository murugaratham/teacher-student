var router = require('express').Router();

router.use('/register', require('./register'));
router.use('/commonstudents', require('./commonstudents'));
router.use('/suspend', require('./suspend'));
router.use('/retrievefornotifications', require('./retrievefornotifications'));

module.exports = router;
