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
  res.json({
    msg: 'Creación de un producto',
    data
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  res.json({
    msg: 'updated',
    data,
    id
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    msg: 'deleted',
    id
  })
})


module.exports = router;
