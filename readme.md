# Teacher student registration API

1. Create a database `CREATE DATABASE <dbname>;`
2. update .env file (we should .gitignore this and upload a .env.example but...)
3. Optionally, seed the database with a little data
4. `npm install`
5. `npm run start` or `npm run watch` for dev mode
6. `npm run test` or `npm run test:dev` for unit test dev mode

these are my npm global packages, if you need

```
garylee@iMac [~] ]$ npm list -g --depth=0
/usr/local/lib
├── create-react-app@1.5.2
├── mysql@2.16.0
├── n@2.1.4
├── npm@6.4.1
├── sequelize-auto@0.4.29
├── tsd@0.6.5
├── typescript@2.1.4
├── typings@2.1.0
└── webpack@1.14.0
```

## Sample .env config

```
PORT=80
SQLUSER=root
SQLPASSWORD=P@ssw0rd!
SQLHOST=localhost
SQLDATABASENAME=<dbname>
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

-- create database mba;
-- if you use new auth protocol, you might get 'please upgrade client warning', do this till mysql2 driver supports the new protocol

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'P@ssw0rd!'
