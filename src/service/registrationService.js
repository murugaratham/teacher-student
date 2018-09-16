const db = require('../db');

module.exports = {
  /**
   * @param teacher
   * @param students
   * if teacher don't exists in db, we will create, else we will retrieve their ids
   * like-wise for students
   *
   * once we get the teacher and student(s) id, we will proceed to
   * create it to our associated table (teacher_students) aliased to
   * registration in app
   */
  registerTeacherToStudent: async (teacher, students) => {
    let studentIds = [];
    /* istanbul ignore next */
    const teacherId = await db.Teacher.findOrCreate({
      where: { email: teacher }
    }).spread(teacher => teacher.id);
    const studentPromise = Promise.all(
      students.map(studentEmail => {
        /* istanbul ignore next */
        return db.Student.findOrCreate({
          where: {
            email: studentEmail,
            isSuspended: false
          }
        });
      })
    );
    return studentPromise
      .then(result => {
        result.map(student => {
          studentIds.push(student[0].get('id'));
        });
      })
      .then(() => {
        let registration = studentIds.map((id, idx) => {
          return { teacherId: teacherId, studentId: id };
        });
        /* istanbul ignore next */
        return db.Registration.bulkCreate(registration);
      });
  }
};
