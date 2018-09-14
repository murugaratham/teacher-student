var router = require('express').Router();
const suspensionService = require('../service/suspensionService');

router.post('/', (req, res) => {
  const { student } = req.body;
  suspensionService.suspendStudent(student).then(() => res.sendStatus(204));
});

module.exports = router;
