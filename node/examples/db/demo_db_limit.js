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
    res.write('Hello');
    res.end();
});

mysqlcon.connect(function(err) {
    if (err) throw err;
    console.log('MySQL connected');
    var sql = "SELECT * FROM customers LIMIT 5";
    mysqlcon.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

server.listen(3000);