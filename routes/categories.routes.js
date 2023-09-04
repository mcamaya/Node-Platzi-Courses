const { Router } = require('express');
const CategoriesService = require('../services/categories.service.js');

const service = new CategoriesService();
const router = Router();

router.get('/', async (req, res) => {
  const categories = await service.find();
  res.json(categories);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const category = await service.findOne(id);
  res.json(category);
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