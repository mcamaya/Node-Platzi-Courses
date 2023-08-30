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


module.exports = router;