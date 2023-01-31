const express = require('express');
const EventEmitter = require('events');

const app = express();
const event = new EventEmitter()

let count =0;
event.on('countApi',()=>{
    count ++;
    console.log("event count" +count)
})

app.get('/',(req,res)=>{
    event.emit('countApi')
    res.send("api called")
})

app.listen(5000)