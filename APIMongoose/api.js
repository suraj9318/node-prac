const express = require('express');
require('./config')
const productModel = require('./product')
const app = express();

//to make json the request
app.use(express.json());

app.post('/create',async(req,resp)=>{
    const data = new productModel(req.body)
    const result = await data.save()
    resp.send(result)
})

app.get('/get',async(req,resp)=>{
    const data = await productModel.find();
    resp.send(data);
});

app.delete('/delete/:id',async(req,resp)=>{
    const id = req.params.id;
    const data =await productModel.deleteOne({id : id});
    resp.send(data);
})

app.put('/update/:_id',async(req,res)=>{
    console.log(req.params);
    const data =await productModel.updateOne(req.params,{$set: req.body})
    res.send(data);
})

app.listen(5000)