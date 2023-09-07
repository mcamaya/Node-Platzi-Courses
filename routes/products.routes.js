const { Router } = require('express');
const ProductsService = require('../services/products.service.js');
const validatorHandler = require('../middlewares/validator.handler.js');
const {createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/product.schema.js');

const router = Router();
const service = new ProductsService();

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products); // res.json para crear una API
});

router.get('/:id',
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const product = await service.findOne(id);
      res.status(200).json(product);
    } catch (err) {
      next(err);
    }
  });

router.post('/',
  validatorHandler(createProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const data = req.body;
      const newProduct = await service.create(data);
      res.status(201).json(newProduct);
    } catch (err) {
      next(err);
    }
  })

router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const modified = await service.update(id, data);
      res.json(modified);
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleted = await service.delete(id);
  res.json(deleted);
})


module.exports = router;
