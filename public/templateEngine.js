const express = require('express')
const path = require('path')
const app = express();

// Set Template Engine
app.set('view engine', 'ejs')

const pathDir = path.join(__dirname,'public');

app.get('/about',(_,res)=>{
    res.sendFile(`${pathDir}/about.html`)
})

app.get('/profile',(req,res)=>{
    res.render('profile')
})


app.listen(5000)