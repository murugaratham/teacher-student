var router = require('express').Router();
const notificationService = require('../service/notificationService');

router.post('/', (req, res) => {
  const { teacher, notification } = req.body;
  notificationService
    .getStudentsToNotify(teacher, notification)
    .done(students => res.send(students));
});

module.exports = router;
