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
    /* Basic table creation */
    //var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    /* Basic table with primary key 'id' */
    var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
    /* Alter the table if it already exists */
    //var sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    mysqlcon.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});

server.listen(3000);