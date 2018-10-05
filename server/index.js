const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
.then(dbInsance => { app.set( 'db', dbInsance), console.log('DB Connected')})
.catch( err => console.log(err));

app.get('/api/houses', controller.getAll)



const port = process.env.port || 8080
app.listen(port, () => {console.log(`Server is live on port: ${port}`)})