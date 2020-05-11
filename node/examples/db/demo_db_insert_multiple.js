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
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['John', 'Highway 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
    ];
    mysqlcon.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});

server.listen(3000);