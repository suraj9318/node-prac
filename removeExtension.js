const express = require('express')
const path = require('path')
const app = express();

const pathDir = path.join(__dirname,'public');

app.get('/',(_,res)=>{
    res.sendFile(`${pathDir}/index.html`)
})

app.get('/about',(_,res)=>{
    res.sendFile(`${pathDir}/about.html`)
})


app.get('*',(_,res)=>{
    res.sendFile(`${pathDir}/notFound.html`)
})




app.listen(5000)