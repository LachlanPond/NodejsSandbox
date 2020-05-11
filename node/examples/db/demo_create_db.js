var http = require('http');
var mysql = require('mysql');

var mysqlcon = mysql.createConnection({
    host: "10.136.44.119",
    user: "Lachlan",
    password: "Lemonz1805"
});

var server = http.createServer(function(req, res) {
    console.log('Server started');
    res.write('Hello');
    res.end();
});

mysqlcon.connect(function(err) {
    if (err) throw err;
    console.log('MySQL connected');
    mysqlcon.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
    });
});

server.listen(3000);