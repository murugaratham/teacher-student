"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "teachers",
      [
        {
          email: "teacher1@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          email: "teacher2@gmail.com",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );

    queryInterface.bulkInsert("students", [
      {
        email: "student1@example.com",
        isSuspended: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: "student2@example.com",
        isSuspended: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);

    // const teachers = queryInterface.sequelize.query(
    //   `select id from teachers`
    // ).then(res => res);

    // const students = queryInterface.sequelize.query(
    //   `select id from students`
    // ).then(res => res);

    // let mapping = teachers.map((id, idx) => {
    //   return { teacherId: id, studentId: idx };
    // });

    // queryInterface.bulkInsert('teacher_students', mapping);
    return queryInterface.bulkInsert("teacher_students", [
      {
        teacherId: 1,
        studentId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("teachers", null, {});
    queryInterface.bulkDelete("students", null, {});
    queryInterface.bulkDelete("teacher_students", null, {});
  }
};
