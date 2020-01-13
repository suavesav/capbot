const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const settings = require('./settings');
const action = require('./routes/action.route');

//setup app
const app = express();

//setup db
let dev_db_url = 'mongodb://flowcardhelp:diggity654J9*@ds137651.mlab.com:37651/heroku_6t9m97kx';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//setup body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//setup routes
app.use('/actions', action);

//start app
let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
