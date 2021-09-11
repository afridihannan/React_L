const mongoose = require('mongoose')
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
});
const createDocument = async () => {
    try {
        const Playlist = new mongoose.model("Playlist", playlistSchema);

        const HTMLPlaylist = new Playlist({
            name: "HTML",
            ctype: "Front-End",
            videos: 10,
            author: "Hannan",
            active: true
        })
        const ExpressPlaylist = new Playlist({
            name: "Express",
            ctype: "Back-End",
            videos: 25,
            author: "Hannan",
            active: true
        })
        const result = await Playlist.insertMany([HTMLPlaylist, ExpressPlaylist]);
        console.log(result);
    } catch (err) {
        console.log(err);
    }

}
createDocument();