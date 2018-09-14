var router = require('express').Router();
const db = require('../db');

// const regex = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*([,;]\s*\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*/gm;
const regex = /\@\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*([,;]\s*\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*/gm;

router.post('/', (req, res) => {
  const { teacher, notification } = req.body;
  const mentioned = notification.match(regex);

  db.sequelize
    .query(
      `select s.email
        from teacher_students ts
        left join students s on s.id = ts.studentId
        left join teachers t on t.id = ts.teacherId
        where t.email = :teacher and s.email not in (:mentioned)`,
      {
        replacements: { teacher: teacher, mentioned: mentioned },
        type: db.sequelize.QueryTypes.SELECT
      }
    )
    .then(result => {
      let emails = result.map(emails => emails.email);
      let response = {
        recipients: [...emails, ...mentioned]
      };
      res.send(response);
    });
});

module.exports = router;

/**
 *
 * student must not be suspended
 * student is registered to teacher OR
 * has been @mentioned
 *
 * deduped
 *
 * get list of students registered under this teacher
 *
 * append @mentioned students (regex?)
 *
 *
 * db.Student.findAll({
    include: [
      {
        model: db.Teacher,
        through: {
          attributes: ['email'],
          where: { email: 't5@teacher.com' }
        }
      }
    ]
  }).then(result => res.send(result));

  sudo lsof -iTCP -sTCP:LISTEN -P
  kill -9
 */
