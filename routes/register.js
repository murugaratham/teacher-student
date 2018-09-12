var router = require("express").Router();
const db = require("../db");
const Sequelize = require("sequelize");

router.post("/", async (req, res) => {
  const { teacher, students } = req.body;
  let studentIds = [];
  // db.sequelize.transaction((transaction) => {
  const teacherId = await db.Teacher.findOrCreate({
    where: { email: teacher }
    // transaction: transaction
  }).spread(teacher => teacher.id);

  const studentPromise = Promise.all(
    students.map(studentEmail => {
      return db.Student.findOrCreate({
        where: {
          email: studentEmail,
          isSuspended: false
        }
        // transaction: transaction
      });
    })
  );
  studentPromise
    .then(result => {
      result.map(student => {
        studentIds.push(student[0].get("id"));
      });
    })
    .then(() => {
      let registration = studentIds.map((id, idx) => {
        return { teacherId: teacherId, studentId: id };
      });
      db.Registration.bulkCreate(registration)
        .then(() => res.sendStatus(204))
        .catch(Sequelize.ValidationError, err => {
          return res.status(500).send({ error: "already registered" });
        });
    });
  // res.sendStatus(204);
});

module.exports = router;
