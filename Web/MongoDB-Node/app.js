const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/HannanData", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection successfull..."))
    .catch((err) => console.log(err));
//{ useNewUrlParser: true,useUnifiedTopology: true }

//create and insert  document
//Schema-->Defines the structure of an element
//A Mongoose model is a wrapper on the Mongoose Schema
const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const createDocument = async () => {
    try{
        const Playlist = new mongoose.model("Playlist", playlistSchema);

    const reactPlaylist = new Playlist({
        name: "Node JS",
        ctype: "Back-End",
        videos: 90,
        author: "Hannan",
        active: true
    })
    const result = await reactPlaylist.save();
    console.log(result);
    }catch(err){
        console.log(err);
    }

}
createDocument();