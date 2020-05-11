var http = require('http');
var mysql = require('mysql');

var mysqlcon = mysql.createConnection({
    host: "10.136.44.119",
    user: "Lachlan",
    password: "Lemonz1805",
    database: "mydb"
});

var server = http.createServer(function(req, res) {
    console.log('Server started');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
});

mysqlcon.connect(function(err) {
    if (err) throw err;
    console.log('MySQL connected');
});

server.listen(3000);