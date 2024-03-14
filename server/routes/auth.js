const express = require('express')
const router = express.Router()

router.post("/login", (req, res) => {
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

router.post("/register", async (req, res) => {
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

module.exports = router