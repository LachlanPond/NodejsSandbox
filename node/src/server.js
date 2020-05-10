var http = require('http');
var mysql = require('mysql');

var mysqlcon = mysql.createConnection({
    host: "0.0.0.0",
    user: "myusername",
    password: "mypassword"
});

var server = http.createServer(function(req, res) {
    console.log('got 2 request!');
    res.write('what\'s the deal test homeless people? just get a house');
    res.end();
});

mysqlcon.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');
});
server.listen(3000);