const express = require("express");
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());

 const foodRoutes = require("./controller/routes");
 app.use('/food',foodRoutes) ;

app.get('/',(req,res)=>{
    res.send('Welcome to my API');
})

app.post('/',(req,res)=>{
    res.status(405).send('Not allowed');    
})


module.exports = app;