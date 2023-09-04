const { Router } = require('express');
const ProductsService = require('../services/products.service.js');

const router = Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products); // res.json para crear una API
});

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const product = await service.findOne(id);
  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const data = req.body;
  const newProduct = await service.create(data);
  res.status(201).json(newProduct);
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const modified = await service.update(id, data);
    res.json(modified);
  } catch (error) {
    res.status(404).json({msg: error.message})
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await service.delete(id);
  res.json(deleted);
})


module.exports = router;
