
const express = require('express');
const router = express.Router();
const helpers = require('./helpers');
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname+'-'+Date.now())
    }
})

const upload = multer({ storage: storage })
// use it before all route definitions

router.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

router.route('/')
    .get(helpers.getImages)
    .post(upload.single('imagePath'), helpers.createImage)

router.route('/:imageId')
    .put(helpers.updateImage)

// end the input stream and allow the process to exit 
module.exports = router;
