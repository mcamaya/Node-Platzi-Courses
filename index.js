const express = require('express');
const { faker } = require('@faker-js/faker'); //npm i @faker-js/faker <- Simulamos data

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta');
});

app.get('/products', (req, res) => {
  const products = [];

  const { size } = req.query;
  const limit = size || 10;

  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      name: faker.commerce.productName(),
      image: faker.image.url()
    })
  }
  res.json(products); // res.json para crear una API
});

// Los endpoints específicos deben ir antes que los endpoints dinámicos
app.get('/products/filter', (req, res) => {
  res.json('Soy un filtro'); // Si no, me tomaría '/filter' como el parámetro
});

app.get('/products/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    id,
    route: 'Ruta productos',
    name: 'My Product',
    price: 100000,
    category: 'My Category'
  });
});


app.get('/categories/:ctgId/products/:prdId', (req, res) => {
  const {ctgId, prdId} = req.params;
  res.json({
    ctgId,
    prdId
  })
})


app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if(limit && offset) {
    return res.json({
      limit,
      offset
    });
  }
  res.send('no hay query parameters')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

