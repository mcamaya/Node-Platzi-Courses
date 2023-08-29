const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      route: 'Ruta productos',
      name: 'My Product',
      price: 100000,
      category: 'My Category'
    },
    {
      route: 'Ruta productos',
      name: 'My Product',
      price: 100000,
      category: 'My Category'
    },
    {
      route: 'Ruta productos',
      name: 'My Product',
      price: 100000,
      category: 'My Category'
    }
  ]); // res.json para crear una API
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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

