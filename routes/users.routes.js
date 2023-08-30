
const { Router } = require('express');
const router = Router();
const UsersService = require('../services/users.service.js');

const service = new UsersService();

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
});


module.exports = router;