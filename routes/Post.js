const express = require('express');
const router = express.Router();
const cors = require('cors');
const Post = require('../models/Post');

router.use(cors());

// Crea un nuevo post en la base de datos.
router.post('/', (req, res) => {
    const postData = {
        responses_count: 0,
        post_content: req.body.post_content,
    }
    Post.create(postData).then(post => {
        res.send({status: 'success', message: 'post registered'});
    }).catch(err => {
        res.send({status: 'error', message: err});
    });
});
// Obtiene todos los post de la base de datos.
router.get('/', (req, res) => {
    Post.findAll().then(posts => {
        res.send({status: 'success', message: posts});
    }).catch(err => {
        res.send({status: 'error', message: err})
    });
});

module.exports = router;
