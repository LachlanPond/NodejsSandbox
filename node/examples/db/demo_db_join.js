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
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
    mysqlcon.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});

/* EXAMPLE INPUT TABLES AND THE RESULT OF THE ABOVE QUERY */
var users = [
    { id: 1, name: 'John', favorite_product: 154},
    { id: 2, name: 'Peter', favorite_product: 154},
    { id: 3, name: 'Amy', favorite_product: 155},
    { id: 4, name: 'Hannah', favorite_product:null},
    { id: 5, name: 'Michael', favorite_product:null}
];
var products = [
    { id: 154, name: 'Chocolate Heaven' },
    { id: 155, name: 'Tasty Lemons' },
    { id: 156, name: 'Vanilla Dreams' }
];

var output = [
    { user: 'John', favorite: 'Chocolate Heaven' },
    { user: 'Peter', favorite: 'Chocolate Heaven' },
    { user: 'Amy', favorite: 'Tasty Lemons' }
];

/* LEFT JOIN will return all users, no matter if they have a favourite product or not */
output = [
    { user: 'John', favorite: 'Chocolate Heaven' },
    { user: 'Peter', favorite: 'Chocolate Heaven' },
    { user: 'Amy', favorite: 'Tasty Lemons' },
    { user: 'Hannah', favorite: null },
    { user: 'Michael', favorite: null }
];

/* RIGHT JOIN selects all products and the user who has them as their favourites */
output = [
    { user: 'John', favorite: 'Chocolate Heaven' },
    { user: 'Peter', favorite: 'Chocolate Heaven' },
    { user: 'Amy', favorite: 'Tasty Lemons' },
    { user: null, favorite: 'Vanilla Dreams' }
];

server.listen(3000);