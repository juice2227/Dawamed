const express  = require('express')
const cors = require("cors")
const app = express();
const UserModel = require("./models/users")

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


  app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email : email})
    .then(user => {
        if(user) {
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("The password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post("/register", async (req, res) => {
  try{
    const { firstname, lastname,password,email ,confirmPassword } = req.body;
     // Check if user exists
     const existingUser = await UserModel.findOne({ email });
     if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }
    // Create a new user instance
    const newUser = new UserModel({
      lastname,
      firstname, 
      email,
      password
    });
    // save user to the database
    await newUser.save();
    
    console.log(lastname,email)
    res.json({ message: 'User registered successfully. Redirecting to login...' });
    
  }
  catch (error) {
    console.error('Error registering user:', error.message);
    res.status(500).json({ error: 'Internal server error' });
  }

   

})


app.listen(port,()=>{
    console.log(`Server listening to port ${port} `)
})


