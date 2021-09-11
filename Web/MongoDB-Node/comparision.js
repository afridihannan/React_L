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
const getDocument = async () => {
    try {
        const result = await Playlist.find({ videos: { $gt: 50 } }).select({ name: 1 });
       
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
getDocument();