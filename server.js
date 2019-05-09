const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const Post = require('./routes/Post');
const Response = require('./routes/Response');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/post', Post);
app.use('/response', Response);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});