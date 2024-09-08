const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
const URL = process.env.MONGO_URL
const cors = require('cors');

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


try{
    mongoose.connect(URL)
    console.log("connected to database"); 
}
catch(err){
    console.log(err);
}

app.get("/",(req,res)=>{
    res.send("Hello World");
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})