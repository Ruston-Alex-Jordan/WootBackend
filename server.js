require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const massive = require('massive');

const products_controller = require('./controllers/products_controller.js');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then(function (db) {
    app.set('db', db)
})

//get api calls
app.get('/products', products_controller.getProducts);

//put api calls
app.put('/update-quantity', products_controller.updateProducts);


const port = 8000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );