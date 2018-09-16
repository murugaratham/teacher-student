const app = require('../../app');
const server = require('supertest')(app);

describe('register', () => {
  it('pass the test', () => {
    expect(1).toEqual(1);
  });
});

/**
 *
 * student must not be suspended
 * student is registered to teacher OR
 * has been @mentioned
 *
 * deduped
 *
 * get list of students registered under this teacher
 *
 * append @mentioned students (regex?)
 *
 *
 * db.Student.findAll({
    include: [
      {
        model: db.Teacher,
        through: {
          attributes: ['email'],
          where: { email: 't5@teacher.com' }
        }
      }
    ]
  }).then(result => res.send(result));

  sudo lsof -iTCP -sTCP:LISTEN -P
  kill -9
 */
