const express = require('express');
const router = express.Router();
const cors = require('cors');
const Response = require('../models/Response');

router.use(cors());

/**
 * Crea un nuevo response en la base de datos, guarda un post_id
 * y response_content, post_id tiene que ser un id de un post 
 * que se encuentre registrado en la tabla posts.
 */
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