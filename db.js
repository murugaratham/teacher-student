const TeacherModel = require("./models/Teacher");
const StudentModel = require("./models/Student");

const Sequelize = require("sequelize");
const sqlUser = process.env.SQLUSER;
const sqlPassword = process.env.SQLPASSWORD;
const sqlHost = process.env.SQLHOST;
const sqlDatabaseName = process.env.SQLDATABASENAME;

const sequelize = new Sequelize(sqlDatabaseName, sqlUser, sqlPassword, {
  host: sqlHost,
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false
});

var db = {};

db.Student = sequelize.import(__dirname + "/models/Student.js");
db.Teacher = sequelize.import(__dirname + "/models/Teacher.js");
db.Registration = sequelize.import(__dirname + "/models/Registration.js");
db.sequelize = sequelize; //contain a settings of database
db.Sequelize = Sequelize;

// this is to init our database if it doesn't exists
const Teacher = TeacherModel(sequelize, Sequelize);
const Registration = sequelize.define("teacher_student", {});
const Student = StudentModel(sequelize, Sequelize);

Teacher.belongsToMany(Student, { through: Registration, unique: false });
Student.belongsToMany(Teacher, { through: Registration, unique: false });
//

// disable force, so we don't always drop the db :)
sequelize.sync({ force: false }).then(() => {
  console.log(`sequelize init!`);
});

module.exports = db;
