const { Router } = require('express');
const ProductsService = require('../services/products.service.js');

const router = Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products); // res.json para crear una API
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = service.findOne(id);
  res.status(200).json(product);
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
