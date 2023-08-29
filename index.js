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
  res.json({
    route: 'Ruta productos',
    name: 'My Product',
    price: 100000,
    category: 'My Category'
  }); // res.json para crear una API
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

