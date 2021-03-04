let mongoose = require('mongoose');


let userImagesSchema = new mongoose.Schema({
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

let Image = mongoose.model('Image', userImagesSchema);
module.exports = Image;