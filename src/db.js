const Sequelize = require('sequelize');
const sqlUser = process.env.SQLUSER;
const sqlPassword = process.env.SQLPASSWORD;
const sqlHost = process.env.SQLHOST;
const sqlDatabaseName = process.env.SQLDATABASENAME;

const isTestEnv = process.env.NODE_ENV !== 'test';
const sequelize = new Sequelize(sqlDatabaseName, sqlUser, sqlPassword, {
  host: sqlHost,
  dialect: 'mysql', // i've been told to use mysql
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: isTestEnv,
  operatorsAliases: false
});

// disable force, so we don't always drop the db :)
sequelize.sync({ force: false }).then(() => {
  if (isTestEnv) console.log(`sequelize init!`);
});

var db = {};

db.Student = sequelize.import(__dirname + '/models/Student.js');
db.Teacher = sequelize.import(__dirname + '/models/Teacher.js');
db.Registration = sequelize.import(__dirname + '/models/Registration.js');

db.Teacher.belongsToMany(db.Student, { through: db.Registration });
db.Student.belongsToMany(db.Teacher, { through: db.Registration });

db.sequelize = sequelize; //contain a settings of database
db.Sequelize = Sequelize;

module.exports = db;
