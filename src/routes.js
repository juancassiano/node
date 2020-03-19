const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');

routes.get('/products',ProductController.index);  //Listar Produtos
routes.get('/products/:id',ProductController.show);  //Listar Um Produto
routes.post('/products',ProductController.store); // Criar Produto
routes.put('/products/:id',ProductController.update); // Alterar Produto
routes.delete('/products/:id',ProductController.destroy); // Deletar Produto


module.exports = routes;