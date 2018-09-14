const dotenv = require('dotenv').config();

/**
 * Don't need so many environment for now
 */
module.exports = {
  development: {
    username: process.env.SQLUSER,
    password: process.env.SQLPASSWORD,
    database: process.env.SQLDATABASENAME,
    host: process.env.SQLHOST,
    dialect: 'mysql',
    operatorsAliases: false
  },
  test: {
    username: process.env.SQLUSER,
    password: process.env.SQLPASSWORD,
    database: process.env.SQLDATABASENAME,
    host: process.env.SQLHOST,
    dialect: 'mysql',
    operatorsAliases: false
  },
  production: {
    username: process.env.SQLUSER,
    password: process.env.SQLPASSWORD,
    database: process.env.SQLDATABASENAME,
    host: process.env.SQLHOST,
    dialect: 'mysql',
    operatorsAliases: false
  }
};
