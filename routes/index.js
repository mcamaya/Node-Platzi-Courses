const productsRouter = require('./products.routes.js');
const usersRouter = require('./users.routes.js');
const categoriesRouter = require('./categories.routes.js');

function routersApi(app){
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routersApi;