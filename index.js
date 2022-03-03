const express = require('express');
const app = express();
const pool = require('./db');

app.use(express.json());
app.post('/employee', async(req, res) =>{
    try{
        const {name, date_of_joining, designation, gender, email, bio} = req.body;
        console.log(req.body);
        // console.log(name);
        res.json(req.body)
    }catch(error){
        res.status(500).json(error);
    }
})

//create a server
app.listen(5000, ()=>{
    console.log("Server listening on port 5000");
})