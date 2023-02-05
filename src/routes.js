const { Router } = require('express')

const routes = new Router()

console.log("teste");

routes.get('/hello', (req, res)=>{
    console.log("rota hello");
    return res.json({mensage: "hello"})
})

module.exports = routes