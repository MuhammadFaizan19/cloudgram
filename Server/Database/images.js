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
    sharedTo: {
        type: Array,
    }
})

let Image = mongoose.model('Image', imageSchema);
module.exports = Image;