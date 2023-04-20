const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const tinmoi = require('./routes/tinmoi.route'); // Imports routes for the products
const app = express();
app.use('/', tinmoi);
let port = process.env.PORT || 3000;
let host = '0.0.0.0';

app.listen(port, host, () => {
    console.log('Server is up and running on port numner ' + port);
});