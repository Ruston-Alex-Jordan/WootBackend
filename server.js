require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const massive = require('massive');

const products_controller = require('./controllers/products_controller.js');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive( process.env.CONNECTION_STRING ).then( (db) => {
    app.set('db', db);

})
app.get('/products', products_controller.getProducts);

const port = 8000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );