const { Router } = require('express');
const productsRouter = require('./products.routes.js');
const usersRouter = require('./users.routes.js');
const categoriesRouter = require('./categories.routes.js');

function routersApi(app){
  const router = Router();
  app.use('/api/v1', router)
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/categories', categoriesRouter);
}

module.exports = routersApi;