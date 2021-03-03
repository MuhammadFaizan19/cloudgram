const mongoose = require('mongoose');
const Image = require('./images');

const connectToMongo = () => {
    mongoose.connect('mongodb+srv://MuhammadFaizan:pass1234@cluster0.wpz2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
}
mongoose.set('useFindAndModify', false);
module.exports = {
    connectToMongo,
    Image
}