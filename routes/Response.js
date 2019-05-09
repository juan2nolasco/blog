const express = require('express');
const router = express.Router();
const cors = require('cors');
const Response = require('../models/Response');

router.use(cors());

router.post('/', (req, res) => {
    const responseData = {
        post_id: req.body.post_id,
        response_content: req.body.response_content,
    }
    Response.create(responseData).then(response => {
        res.send({status: 'success', message: 'response registered'});
    }).catch(err => {
        res.send({status: 'error', message: err});
    });
});

module.exports = router;