const { Router } = require('express');
const { faker } = require('@faker-js/faker'); //npm i @faker-js/faker <- Simulamos data

const router = Router();

router.get('/', (req, res) => {
  const products = [];

  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      category: faker.commerce.category(),
      image: faker.image.url()
    })
  }
  res.json(products); // res.json para crear una API
});

// Los endpoints específicos deben ir antes que los endpoints dinámicos
router.get('/filter', (req, res) => {
  res.json('Soy un filtro'); // Si no, me tomaría '/filter' como el parámetro
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    route: 'Ruta productos',
    name: 'My Product',
    price: 100000,
    category: 'My Category'
  });
});


module.exports = router;
