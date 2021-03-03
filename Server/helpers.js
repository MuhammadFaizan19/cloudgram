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
        imagePath: 'http://cloudgram.herokuapp.com/' + req.file.path,
        userEmail: req.body.userEmail,
        sharedTo: []
    })
        .then((newImage) => {
            res.status(201).json(newImage)
        })
        .catch((error) => { console.log(error); res.send(error); });
}

exports.updateImage = (req, res) => db.Image.findOneAndUpdate({ _id: req.params.imageId }, req.body, { new: true })
    .then((image) => res.status(201).json(image))
    .catch((error) => res.send(error));

module.exports = exports;