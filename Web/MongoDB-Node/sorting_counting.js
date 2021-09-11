const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/HannanData", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection successfull..."))
    .catch((err) => console.log(err));

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
//count
/*const Playlist = new mongoose.model("Playlist", playlistSchema);
const getDocument=async()=>{
    try{
        const result=await Playlist.find({$and:[{ctype:"Back-End"},{author:"Hannan"}]}).countDocuments();
        console.log(result);
    }catch(err){
        console.log(err);
    };
}*/
//sort-->The order we set in the compass
const Playlist = new mongoose.model("Playlist", playlistSchema);
const getDocument=async()=>{
    try{
        const result=await Playlist.find({author:"Hannan"}).select({name:1}).sort({name:1});
        //for reverse -1;
        console.log(result);
    }catch(err){
        console.log(err);
    };
}
getDocument();