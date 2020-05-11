var http = require('http');
var mysql = require('mysql');
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
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt);
    res.end();
});

mysqlcon.connect(function(err) {
    if (err) throw err;
    console.log('MySQL connected');
});

server.listen(3000);