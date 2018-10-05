const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then(dbInsance => { app.set( 'db', dbInsance), console.log('DB Connected')})
.catch( err => console.log(err));



const port = process.env.port || 8080
app.listen(port, () => {console.log(`Server is live on port: ${port}`)})