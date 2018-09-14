var router = require('express').Router();
const db = require('../db');
const Sequelize = require('sequelize');

router.post('/', async (req, res) => {
  const { teacher, students } = req.body;
  if (!students || !teacher) {
    return res.status(500).send({ error: 'Incorrect parameters' });
  }
  let studentIds = [];
  const teacherId = await db.Teacher.findOrCreate({
    where: { email: teacher }
  }).spread(teacher => teacher.id);

  const studentPromise = Promise.all(
    students.map(studentEmail => {
      return db.Student.findOrCreate({
        where: {
          email: studentEmail,
          isSuspended: false
        }
      });
    })
  );
  studentPromise
    .then(result => {
      result.map(student => {
        studentIds.push(student[0].get('id'));
      });
    })
    .then(() => {
      let registration = studentIds.map((id, idx) => {
        return { teacherId: teacherId, studentId: id };
      });
      db.Registration.bulkCreate(registration)
        .then(() => res.sendStatus(204))
        .catch(Sequelize.ValidationError, err => {
          return res.status(500).send({ error: 'already registered' });
        });
    });
});

module.exports = router;
