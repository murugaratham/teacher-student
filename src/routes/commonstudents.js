var router = require('express').Router();
const db = require('../db');
const { getTeacherCount } = require('../util');

router.get('/', (req, res) => {
  const { teacher } = req.query;
  // const length = Array.isArray(teacher) === true ? teacher.length : 1;
  const length = getTeacherCount(teacher);
  db.sequelize
    .query(
      `SELECT ts.studentId, s.email
       FROM teacher_students ts
       left join students s on ts.studentId = s.id
       left join teachers t on ts.teacherId = t.id
       WHERE t.email IN ('t5@teacher.com')
       GROUP BY studentId
       having count(distinct ts.teacherId )=:count;`,
      {
        replacements: { teacher: teacher, count: length },
        type: db.sequelize.QueryTypes.SELECT
      }
    )
    .then(result => res.send(result));
});

module.exports = router;
