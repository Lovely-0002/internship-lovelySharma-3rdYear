require('dotenv').config();

const express=require("express");
const app= express();
const connectDB = require('./connect/connect')
app.get('/',function(req,res){
    res.send("Welcome to our hotel! What can i help you?")
})
app.get('/chicken',function(req,res){
    res.send("We would love to serve you chicken.")
})
app.get('/idli',(req,res)=>{
    var customized_idli={
        name:'rava-idli',
        size:'10 cm diameter available',
        is_sambhar: true,
        is_chutney: false
    }
    res.send(customized_idli)
})
const PORT = process.env.PORT;
const start=async()=>{
    await connectDB(process.env.MONGO_URI)
    app.listen(3000,()=>{
    console.log(`Listening on port http://localhost:${PORT}/`)
})
}

start();