let mongoose = require('mongoose');


let imageSchema = new mongoose.Schema({
    imagePath: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    shared: {
        type: Boolean,
        required: true
    }
})

let Image = mongoose.model('Game', imageSchema);
module.exports = Image;