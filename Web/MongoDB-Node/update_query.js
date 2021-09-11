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
const Playlist = new mongoose.model("Playlist", playlistSchema);
const UpdateDocument = async (_id) => {
    try {
        const result = await Playlist.findByIdAndUpdate({ _id }, {
            $set:{name: "Express JS"}
            //the name printed on the console is the previous name we had set
        },{
            useFindAndModify:false
        });
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
//UpdateDocument("6112a95d7ff76c35a4044dc7");
//Delete
const delDOc=async(_id)=>{
   const result=await Playlist.deleteOne({_id});
}