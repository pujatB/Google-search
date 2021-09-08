const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const data = require('./data')

 const foodRoutes = require("./controller/routes");
 app.use('/food',foodRoutes) ;

app.get('/',(req,res)=>{
    res.send('Welcome to my API');
})

app.get('/food/:name',(req,res)=>{
        if (!(req.params['name'] in data)) {
            res.status(404).send('This page is still updating.')
        } else {
            res.send(data[data.findIndex(x=>x.name === req.params['name'])]);
        }
})

