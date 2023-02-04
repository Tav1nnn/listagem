const express = require('express')
const {v4:uuidv4} = require('uuid')
const server = express()
server.use(express.json())

let custumers = [
    {id: uuidv4(), name: "Otavio", site: "http://google.com"},
    {id: uuidv4(), name: "Pedro", site: "http://google.com"},
    {id: uuidv4(), name: "Malu", site: "http://google.com"}
]

server.get('/list/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const custumer = custumers.find(item => item.id === id)//procura id igual
    const status = custumer ? 200:404
    
    return res.status(status).json(custumers)
})

server.post('/add', (req, res)=>{
    const {name, site} = req.body
    if(!name || !site){
        return res.status(400).json({error : "name ou site nulos"})
    }

    custumers.push({
        id: uuidv4(),
        name: name,
        site: site
    }) 

    return res.status(200).send()
})

server.listen('3000')
