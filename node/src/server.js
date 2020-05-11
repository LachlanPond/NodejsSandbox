var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var mysql = require('mysql');
var fs = require('fs');
var url = require('url');

var app = express();
var upload = multer();

app.get('/index', function(req, res) {
    res.render('index');
});

app.set('view engine', 'pug');
app.set('views', './views');

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/index', function(req, res) {
    console.log(req.body.test.requestfromdb);
    mysqlcon.connect(function(err) {
        if (err) throw err;
        console.log('MySQL connected');
        var sql = "CREATE TABLE " + req.body.test.requestfromdb + " (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
        mysqlcon.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Table created");
        });
    });
    res.render('index');
});

app.listen(3000, function() {
    console.log("Server listening on port 3000");
});

var mysqlcon = mysql.createConnection({
    host: "10.136.44.119",
    user: "Lachlan",
    password: "Lemonz1805",
    database: "mydb"
});