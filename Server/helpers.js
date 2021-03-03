var db = require('./Database/database');

exports.getImages = (req, res) => {
    db.Image.find()
        .then((images) => {
            res.json(images);
        })
        .catch((error) => res.send(error))
};

exports.createImage = (req, res) => {
    db.Image.create({
        imagePath: req.file.path,
        userEmail: req.body.userEmail,
        shared: req.body.shared
    })
        .then((newImage) => {
            res.status(201).json(newImage)
        })
        .catch((error) => { console.log(error);res.send(error); });
}



module.exports = exports;