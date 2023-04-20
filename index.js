var cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const tinmoi = require('./routes/tinmoi.route'); 
const app = express();
let port = process.env.PORT || 3000;
let host = '0.0.0.0';
app.use(cors());
app.use('/', tinmoi);
app.listen(port, host, () => {
    console.log('Server is up and running on port numner ' + port);
});