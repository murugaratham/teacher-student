# Teacher student registration API

1. Create a database `CREATE DATABASE dbname;`
2. update .env file (we should .gitignore this and upload a .env.example but...)

## Sample .env config

```
PORT=80
SQLUSER=root
SQLPASSWORD=P@ssw0rd!
SQLHOST=localhost
SQLDATABASENAME=teacher_students
```

## how to run seeders (optional)

`node_modules/.bin/sequelize db:seed:all`

### TODO

- [x] modularize routes
- [x] catch all routes
- [x] nodemon
- [x] prettier rc
- [x] eslint
- [x] env file for ports
- [x] jest test setup
- [x] user story 1
      POST /api/register
- [x] user story 2
      GET /api/commonstudents
- [x] user story 3
      POST /api/suspend
- [x] user story 4
      POST /api/retrievefornotifications
