var router = require('express').Router();
const teacherService = require('../service/teacherService');

router.get('/', (req, res) => {
  const { teacher } = req.query;
  teacherService.getCommonStudent(teacher).done(result => res.send(result));
});

module.exports = router;
