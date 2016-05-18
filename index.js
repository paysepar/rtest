/* To connect to database while running on local machine, use rhc port forwarding.

rhc port-forward rollnado

after launching website, fix the autocomplete zipcode thing. the client is not receiving the server response.

try getting new csr and new ssl certificate to allow custom domains to have ssl certificate. you get certificate from "openssl" website. generate certificate and upload to server using this command in terminal: rhc alias update-cert rollnado rollnado.com --certificate payampaysepar-jamspace.rhcloud.com.cert --private-key payampaysepar-jamspace.rhcloud.com.key

*/

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var https = require('https');
var fs = require('fs');
var mysql = require('mysql');
var portNumber = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000;
var ip = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // the 0.0.0.0 ip opens the server to outside connections. to make server available on this machine only, bind to '127.0.0.1'
var databaseip = process.env.OPENSHIFT_MYSQL_IP || "127.0.0.1";
var databaseport = process.env.OPENSHIFT_MYSQL_PORT || "3306";
var sm = require('sitemap')

// support JSON and URL-encoded bodies for requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


// connection to mysql database
var connection = mysql.createConnection({
    host: databaseip,
    port: databaseport,
    user: 'adminfU7KHaJ',
    password: 'I4tX7iMtGbds',
    database: 'rollnado'
});


app.use(express.static(__dirname + '/public', { maxAge: 86400000 }));


http.listen(portNumber, ip, function(){
  console.log('listening on *:'+ portNumber);
});


app.get("/route", function (req, res) { //generate and send client token when request is received
    
});


app.post('/route', function(req,res) {
    
});