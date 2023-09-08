const express = require('express');
const cors = require('cors');
const routersApi = require('./routes');
const { errorHandler, logErrors, boomErrorHandler } = require('./middlewares/error.handler.js')

const app = express();
const port = 8090;

app.use(express.json());


/* Habilitando permisos a dominios específicos */
const allowedDomains = ['http://127.0.0.1:5500', 'http://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if(allowedDomains.includes(origin)){
      callback(null, true); // No hay problema, concedido el acceso
    } else {
      callback(new Error('403  Connection not allowed'));
    }
  }
}

// Solo funciona si se ubican los middlewares en este orden
app.use(cors(options));
routersApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta');
});




app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
