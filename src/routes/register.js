var router = require('express').Router();
const registrationService = require('../service/registrationService');

router.post('/', async (req, res) => {
  const { teacher, students } = req.body;
  if (!students || !teacher) {
    return res.status(500).send({ error: 'Incorrect parameters' });
  }
  registrationService
    .registerTeacherToStudent(teacher, students)
    .then(() => res.sendStatus(204))
    .catch(err => {
      return res.status(500).send({ error: 'already registered' });
    });
});

module.exports = router;
