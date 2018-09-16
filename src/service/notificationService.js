const { searchMentionedEmails } = require('../util');
const db = require('../db');

const getStudentsToNotifySql = `select s.email
  from teacher_students ts
  left join students s on s.id = ts.studentId
  left join teachers t on t.id = ts.teacherId
  where t.email = :teacher 
  and s.email not in (:mentioned)
  and s.isSuspended = false
  `;

module.exports = {
  /**
   * @param teacher
   * retrieve a list of students common to a given list of
   * teachers (i.e. retrieve students who are registered
   * to ALL of the given teachers).
   */
  getStudentsToNotify: (teacher, notification) => {
    const mentioned = searchMentionedEmails(notification);
    /* istanbul ignore next */
    return db.sequelize
      .query(getStudentsToNotifySql, {
        replacements: { teacher: teacher, mentioned: mentioned },
        type: db.sequelize.QueryTypes.SELECT
      })
      .then(result => {
        let emails = result.map(emails => emails.email);
        return {
          recipients: [...emails, ...mentioned]
        };
      });
  }
};
