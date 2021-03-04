const express = require('express');
const router = express.Router();
const helpers = require('./helpers');
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
    .post(helpers.createImage)

router.route('/:imageId')
    .put(helpers.updateImage)
    .delete(helpers.removeImage)
// end the input stream and allow the process to exit 
module.exports = router;
