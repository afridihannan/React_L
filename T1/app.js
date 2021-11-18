const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

//const db = "mongodb+srv://afridihannan:jo16ce27@cluster0.cr1di.mongodb.net/mernstack?retryWrites=true&w=majority";

dotenv.config({ path: '../.env' });

const port = process.env.PORT

app.use(express.json());
const user = require('./userSchema');
app.use(require('./auth'));
console.log(process.env.DB);
mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successful...");
}).catch((err) => {
    console.log(err);
});

console.log( process.env.PORT );

app.get('/',(req,res)=>{
    res.send("welcome to Home page");
})
app.get('/login',(req,res)=>{
    res.send("welcome to login")
})

app.listen(process.env.PORT, () => {
    console.log(`Server running at port ${process.env.PORT} `);
})
///console.log(process.env.SECRET_KEY)