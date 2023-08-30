const express = require('express');
const routersApi = require('./routes');

const app = express();
const port = 8080;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

routersApi(app);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta');
});

