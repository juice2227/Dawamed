const express  = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT
const mongoose = require('mongoose')


const uri = process.env.MONGO_URI
async function connect() {
    try {
      await mongoose.connect(uri, {useNewUrlParser: true,
        useUnifiedTopology: true, });
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error.message);
      process.exit(1); // Exit the process in case of an error
    }
  }
  
  connect();


app.listen(port,()=>{
    console.log(`Server listening to port ${port} `)
})
