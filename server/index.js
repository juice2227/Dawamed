const express  = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT


app.listen(port,()=>{
    console.log(`Server listening to port ${port} `)
})




const mongoose = require('mongoose');


const mongoURI = 'mongodb://localhost:27017/DawaMed'; // Replace 'mydatabase' with your database nam

try{
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      console.log('MongoDB connected successfully');
}
    catch(error) {
  console.error('MongoDB connection error:', err);
};
