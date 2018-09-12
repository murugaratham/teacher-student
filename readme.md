# Teacher student registration API

1. Create a database
2. update .env file

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
- [ ] jest test setup
- [x] user story 1
      POST /api/register
- [ ] user story 2
      GET /api/commonstudents
- [ ] user story 3
      POST /api/suspend
- [ ] user story 4
      POST /api/retrievefornotifications
