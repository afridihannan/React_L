const mongoose = require('mongoose');
const decrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv');
require('dotenv').config();


// dotenv.config({path:'./config.env'});

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: String,
    password: String,
    confirm: String,
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

//Hashing the password
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await decrypt.hash(this.password, 12);
        this.confirm = await decrypt.hash(this.confirm, 12);
    }
    next();
});

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        //console.log(token);
        return token;
    } catch (err) {
        console.log(err);
    }
}

const User = mongoose.model("Registrations", userSchema);

module.exports = User;