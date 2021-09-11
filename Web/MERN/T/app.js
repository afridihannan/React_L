const express = require('express');
const mongoose = require('mongoose');
const app = express();

const db = "mongodb+srv://afridihannan:jo16ce27@cluster0.cr1di.mongodb.net/mernstack?retryWrites=true&w=majority";

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successful...");
}).catch((err) => {
    console.log(err);
});
//middleware
const middleware = (req, res, next) => {
    console.log("This is a middleware Stage")
    next();
}
app.get('/', (req, res) => {
    res.send("Hello World");
});
app.get('/about', middleware, (req, res) => {
    res.send("MERN Stack Developer");
});
app.get('/contact', (req, res) => {
    res.send("8751869389");
});
app.get('/signUP', (req, res) => {
    res.send("SignUp");
});
app.get('/login', (req, res) => {
    res.send("login");
});

app.listen("3000", () => {
    console.log("Server running at port 3000");
})