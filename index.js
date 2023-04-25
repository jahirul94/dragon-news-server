const express = require('express');
const app = express();
const port = 5000 ;
const cors = require('cors');
const catagories = require('./data/catagorys.json')

app.use(cors());

app.get('/', ( req , res )=>{
    res.send('Dragon is Running')

})

app.get('/catagories', (req,res)=>{
    res.send(catagories)
})

app.listen(port , ()=>{
    console.log(`Dragon news Running on port : ${port}`);
})