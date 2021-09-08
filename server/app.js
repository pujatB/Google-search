const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const food = require('./data')

//const foodRoutes = require("./controller/routes");
//app.use('/food',foodRoutes) ;

app.get('/',(req,res)=>{
    res.send('Welcome to my API');
})

app.get('/food',(req,res)=>{
    res.send(food)
})

module.exports = app;

