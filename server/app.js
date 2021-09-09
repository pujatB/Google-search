const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const data = require('./data')
const {SearchClass} = require('./model/searchFunctions')


app.get('/',(req,res)=>{
    res.send('Welcome to my API');
})

app.get('/:value', (req, res) => {
        const value = req.params.value;
        console.log(value);
        const selectedSearch = SearchClass.findByTopic(value);
        res.send(selectedSearch);
});


module.exports = app;
