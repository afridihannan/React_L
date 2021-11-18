const express = require('express');
const router = express.Router();
const user = require('./userSchema');
const dcrypt = require('bcryptjs');
const jwt=require('jsonwebtoken');
const authenticate=require('./authenticate');

router.get('/', (req, res) => {
    res.send("Hello from the server side");
});
router.post('/register', (req, res) => {
    const { name, email, phone, work, password, confirm } = req.body;
    
    if (!name || !email || !phone || !work || !password || !confirm) {
        return res.status(422).json({ error: "Please fill the field properly" });
    }
    user.findOne({ email: email })
        .then((userexist) => {
            if (userexist) {
                return res.status(422).json({ error: "Email already Exist" });
            } else if (password != confirm) {
                return res.status(422).json({ error: "Invalid credentials" });
            }
            const User = new user({ name, email, phone, work, password, confirm });
            //decrypt password

            User.save().then(() => {
                res.status(201).json({ message: "User registered Successfully" });
            }).catch(err => {
                res.status(500).json({ error: "Failed to register" });
            })
        }).catch(err => {

        });
})


// login route
router.post('/login', async (req, res) => {
    console.log(req.body);
    res.send(req.body);
    
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Invalid Credentials" })
        }
        const userlogin = await user.findOne({ email: email });
        if (userlogin) {
            console.log(userlogin);
            const isMatch = await dcrypt.compareSync(password, userlogin.password);
            if(!isMatch){
                console.log(userlogin.password+password);
            }
            const token=await userlogin.generateAuthToken();
           // console.log(token);

           //Cokkies
           res.cookie("jwt",token,{
               expires:new Date(Date.now()+25892000000),
               httpOnly:true
           })
            if (!isMatch) {
                return res.status(401).json({ message: "Invalid Credentials" });
            } else {
                return res.json({ message: "successfully signed-in" });
            }
        } else {
            return res.status(401).json({ message: "Credentials Invalid" });
        }
    } catch (err) {
        console.log(err);
    }

});

//Login to about page

router.get('/about',authenticate,(req,res)=>{
    res.send(req.rootuser);//Sending entire data to frontend
})
module.exports = router;