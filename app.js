const express = require('express');
const app = express();

const reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send("You are not valid user")
    }
    else if(req.query.age< 18)
    {
        resp.send("You are a kid go home")
    }
    else{
        next();
    }
} 
app.use(reqFilter);

app.get('/',(req,resp)=>{
    resp.send('Welcome to home page')
})


app.listen(5000)