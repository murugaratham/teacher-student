var router = require('express').Router();
const db = require('../db');

router.post('/', (req, res) => {
  const { student } = req.body;
  db.Student.update(
    { isSuspended: true },
    {
      returning: true,
      plain: true,
      where: { email: student }
    }
  ).then(() => {
    res.send(204);
  });
});

// handle non existent student?
module.exports = router;
