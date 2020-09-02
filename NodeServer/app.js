const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

/* App Configs */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});

/* Get,Post Methods */
app.get('/', function (req, res) {
    res.send('Homepage');
    // res.sendFile(__dirname +'/build/index.html');
});
app.get('/items', function (req, res) {
    res.sendFile(__dirname + '/data/items.json');
});
app.post('/data', function (req, res) {
    console.log('Rchd post method');
    console.log(req.body);
    res.status(200).send({ msg: 'Data Sent successfully' });
    // res.status(400).send({msg: 'Server ErrOR'});
});
