require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const cors = require('cors');
const massive = require('massive');

const products_controller = require('./controllers/products_controller.js');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

massive({
    host: process.env.HOST,
    port: process.env.PORT,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,  
    ssl: true
}).then(function (db) {
    app.set('db', db);
    
    app.get('/products', products_controller.getProducts);
})

const port = 8000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );