const express  = require('express');
const app = express();
require('dotenv').config();
<<<<<<< HEAD
const port = process.env.
=======
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
>>>>>>> 82d1c40c8598b992f19fe88c8d6229b1598e28da


app.listen(port,()=>{
    console.log(`Server listening to port ${port} `)
})
<<<<<<< HEAD




const mongoose = require('mongoose');


const mongoURI = 'mongodb://localhost:27017/DawaMed'; 

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
=======
>>>>>>> 82d1c40c8598b992f19fe88c8d6229b1598e28da
