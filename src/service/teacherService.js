const { getEntityCount } = require('../util');
const db = require('../db');

const getCommonStudentSql = `SELECT ts.studentId, s.email
    FROM teacher_students ts
    left join students s on ts.studentId = s.id
    left join teachers t on ts.teacherId = t.id
    WHERE t.email IN (:teacher)
    GROUP BY studentId
    having count(distinct ts.teacherId )=:count;`;

module.exports = {
  /**
   * @param teacher
   * retrieve a list of students common to a given list of
   * teachers (i.e. retrieve students who are registered
   * to ALL of the given teachers).
   */
  getCommonStudent: teacher => {
    const length = getEntityCount(teacher);
    /* istanbul ignore next */
    return db.sequelize
      .query(getCommonStudentSql, {
        replacements: { teacher: teacher, count: length },
        type: db.sequelize.QueryTypes.SELECT
      })
      .then(result => result);
  }
};
