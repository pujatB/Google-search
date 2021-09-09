const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const data = require('./data')
const searchFunction = require('./model/searchFunctions')


app.get('/',(req,res)=>{
    res.send('Welcome to my API');
})

app.get('/:topic', (req, res) => {
    try {
        const topicName = req.params.topic;
        console.log(topicName)
        //const selectedSearch = searchFunction.SearchClass.findByTopic(topicName)
        const selectedSearch = searchFunction.findByTopic(topicName)
        res.send(selectedSearch);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});


module.exports = app;
