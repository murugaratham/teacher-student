var router = require('express').Router();
const registrationService = require('../service/registrationService');
const { ValidationError } = require('sequelize');

router.post('/', async (req, res) => {
  const { teacher, students } = req.body;
  registrationService
    .registerTeacherToStudent(teacher, students)
    .then(() => res.sendStatus(204))
    .catch(err => {
      return res.status(500).send({ error: 'already registered' });
    });
});

module.exports = router;
