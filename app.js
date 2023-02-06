var express = require('express');
var session = require('express-session'); 
var cookie = require('cookie-parser');
var path = require('path'); 
var ejs = require('ejs');
var mutler = require('multer'); 
var async = require('async');
var nodemailer = require('nodemailer');
var crypto = require('crypto');
var expressValidator = require('express-validator');
var sweetalert = require('sweetalert2');
var bodyParser = require('body-parser');
const http = require('http');
var db = require('./models/db_controller');


var app = express();

app.set('view engine', 'ejs');
const Server = http.createServer(app);


app.use(express.static('./public'));
// This code parses the body of the request to the server to make the data
// available to the app.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookie());

const PORT = process.env.PORT || 3000;
Server.listen(PORT, () => console.log(`Server started on port ${PORT}`));