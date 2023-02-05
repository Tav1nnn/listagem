/*const express = require('express')
const {v4:uuidv4} = require('uuid')
const server = express()
server.use(express.json())

let custumers = [
    {id: 1, name: "Otavio", site: "http://google.com"},
    {id: 2, name: "Pedro", site: "http://google.com"},
    {id: 3, name: "Malu", site: "http://google.com"}
]

server.get('/list/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const custumer = custumers.find(item => item.id === id)//procura id igual
    const status = custumer ? 200:404
    
    return res.status(status).json(custumer)
})

server.post('/add', (req, res)=>{
    const {name, site} = req.body
    if(!name || !site){
        return res.status(400).json({error : "name ou site nulos"})
    }

    const id = (custumers.length)+1
    console.log(id);

    custumers.push({
        id: id,
        name: name,
        site: site
    }) 

    return res.status(200).send()
})

server.put('/update/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const {name, site} = req.body;

    //findeIndex traz a posição do array que estiver esse id
    const index = custumers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404

    if(index>=0){
        custumers[index] = {
            id: parseInt(id),
            name,
            site
        } 
        return res.status(status).json(custumers[index])
    }

    return res.status(status).json({error: "este id não existe"})

})

server.delete('/delete/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    const index = custumers.findIndex(item => item.id === id)
    const status = index >= 0 ? 200 : 404

    if(index>=0){
        custumers.splice(index,1)
    }

    return res.status(status).json()
})

server.listen('3000')
*/