const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
//app.use(urlencoded());
app.use(cors());

const db = "mongodb+srv://afridihannan:jo16ce27@cluster0.cr1di.mongodb.net/mernstack?retryWrites=true&w=majority";
mongoose.connect(db, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => { console.log("Database Connection Successful") }).catch((err) => console.log(err));




//Using UserSchema

//const user=require('./userschema');
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirm: String
})
const loginlogout = new mongoose.model("loginlogout", UserSchema);




//Routes
app.get('/', (req, res) => {
    res.send("Hello");
})
app.post('/register', (req, res) => {
    const { name, email, password, confirm } = req.body;
    loginlogout.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send("User already registered")
        } else {
            const user = new loginlogout({
                name, email, password, confirm
            })
            user.save((err) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Registration Successful")
                }
            })
        }
    })
})
app.post('/login', (req, res) => {
    const {email,password}=req.body;
    loginlogout.findOne({email:email},(err,user)=>{
        if(user){
           if(password=== user.password){
               res.send({message:"Login Successful",user:user});
           }else{
               res.send({message:"Password Not correct"});
           }
        }else{
            res.send({message:"Invalid Credentials"})
        }
    })
})
app.listen(9000, (req, res) => {
    console.log("Server running at port 9000");
})
