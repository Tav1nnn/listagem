const { Router } = require('express');
const { route } = require('./app');

const routes = new Router()

const custumers = require('./app/controllers/CustumersController')

console.log("teste");


routes.get('/customers', custumers.index)
routes.get('/customers/:id', custumers.show)
routes.post('/customers', custumers.create)
routes.put('/customers/:id', custumers.update)
routes.delete('/customers:id', custumers.destroy)



module.exports = routes