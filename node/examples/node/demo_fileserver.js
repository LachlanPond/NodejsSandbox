var http = require('http');
var mysql = require('mysql');
var fs = require('fs');
var url = require('url');

var mysqlcon = mysql.createConnection({
    host: "10.136.44.119",
    user: "Lachlan",
    password: "Lemonz1805",
    database: "mydb"
});

/* Go to localhost/?year=2020&month=July to see the output */
var server = http.createServer(function(req, res) {
    console.log('Server started');
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
});

mysqlcon.connect(function(err) {
    if (err) throw err;
    console.log('MySQL connected');
});

server.listen(3000);