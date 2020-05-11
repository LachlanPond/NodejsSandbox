var http = require('http');
var mysql = require('mysql');
var fs = require('fs');

var mysqlcon = mysql.createConnection({
    host: "10.136.44.119",
    user: "Lachlan",
    password: "Lemonz1805",
    database: "mydb"
});

/* Go to localhost/?year=2020&month=July to see the output */
var server = http.createServer(function(req, res) {
    console.log('Server started');
    fs.readFile('demofile1.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

mysqlcon.connect(function(err) {
    if (err) throw err;
    console.log('MySQL connected');
});

server.listen(3000);