const { Router } = require('express');
const CategoriesService = require('../services/categories.service.js');

const service = new CategoriesService();
const router = Router();

router.get('/', (req, res) => {
  const categories = service.find();
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id);
  res.json(category);
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