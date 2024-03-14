const express  = require('express')
const cors = require("cors")
const app = express();
const UserModel = require("./models/users")
const auth = require('./routes/auth')
const lipaNaMpesa = require('./routes/daraja')

require('dotenv').config();
const port = process.env.PORT
const mongoose = require('mongoose')
app.use(express.json())
app.use(cors())


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
  // routes
app.use('/api',auth)
app.use('/api',lipaNaMpesa)
 

app.listen(port,()=>{
    console.log(`Server listening to port ${port} `)
})


