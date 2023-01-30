const express = require('express');
const dbConnect = require('./mongoDb')

const app = express();

// req converted into json
app.use(express.json())

// get 
app.get('/',async (req,res)=>{
    let data = await dbConnect();
    let response = await data.find().toArray();
    res.send(JSON.stringify(response))
})

// post 
app.post('/', async(req,res)=>{
    const db =  await dbConnect();
    const result = await db.insert(req.body)
    res.send(result)
})

// update
app.put('/', async(req,res)=>{
   const db  = await dbConnect();
   const result = await db.updateOne({name : req.body.name},{$set:req.body})
   res.send(result)
})

// delete
app.delete('/:id',async(req,res)=>{
    const db = await dbConnect();
    const result = await db.deleteOne({id: req.body.id})
    res.send(result)
   
})


app.listen(5000)

