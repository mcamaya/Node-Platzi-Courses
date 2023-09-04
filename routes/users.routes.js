
const { Router } = require('express');
const router = Router();
const UsersService = require('../services/users.service.js');

const service = new UsersService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await service.findOne(id);
  res.json(user);
});

router.post('/', async (req, res) => {
  const data = req.body;
  const newProduct = await service.create(data);
  res.status(201).json(newProduct);
})

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const modified = await service.update(id, data);
  res.json(modified);
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await service.delete(id);
  res.json(deleted);
})

module.exports = router;