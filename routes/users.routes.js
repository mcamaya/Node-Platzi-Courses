
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

router.post('/', (req, res) => {
  const data = req.body;
  const newProduct = service.create(data);
  res.status(201).json(newProduct);
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const modified = service.update(id, data);
  res.json(modified);
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deleted = service.delete(id);
  res.json(deleted);
})

module.exports = router;