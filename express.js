const express = require('express');
const app = express()

app.get('/',(req,res)=>{
    //sent from browser like  : - http://localhost:5000/?name=suraj
    console.log()
    res.send(`Hey ${req.query.name} this is home page`);
});

app.get('/about',(req,res)=>{
    res.send('<h1>Hey this is About page</h1>');
});

app.listen(5000)