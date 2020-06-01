const express = require('express');

const UserController = require('./controllers/UserController');
const EmprestimoController = require('./controllers/EmprestimoController');
const LivroController = require('./controllers/LivroController');


const routes = express.Router();

routes.get('/users/list', UserController.list);
routes.get('/users/index/:id', UserController.index);
routes.post('/users/insert', UserController.store);
routes.put('/users/update/:id', UserController.update);
routes.delete('/users/delete/:id', UserController.destroy);

routes.get('/livros/list', LivroController.list);
routes.get('/users/:user_id/livros', LivroController.index);
routes.post('/users/:user_id/livros', LivroController.store);
routes.put('/livros/update/:id', LivroController.update);
routes.delete('/livros/delete/:id', LivroController.destroy);

routes.get('/emprestimos/list', EmprestimoController.list);
routes.get('/users/:user_id/emprestimos', EmprestimoController.index);
routes.post('/users/:user_id/emprestimos', EmprestimoController.store);
routes.put('/emprestimos/update/:id', EmprestimoController.update);
routes.delete('/emprestimos/delete/:id', EmprestimoController.destroy);









/*
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users/update/:id', UserController.update)

routes.get('/users/:user_id/emprestimos', EmprestimoController.index);
routes.post('/users/:user_id/emprestimos', EmprestimoController.store);

routes.get('/users/:user_id/livros', LivroController.index);
routes.post('/users/:user_id/livros', LivroController.store);*/


module.exports = routes;