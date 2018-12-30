var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

var connection = mysql.createConnection({
    host: "Localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect (function (err) {
    if (err) throw err;
    start();
});

function start() {
    let query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
    console.table(res);
    })
    selectItem();
};

function selectItem() {
    inquirer.prompt ([
        {
            message: "What is the item number for the product you would like to buy?",
            type: "input",
            name: "choice"
        },
        {
            message: "How many would you like to buy?",
            type: "input",
            name: "quantity"
        }
    ])
    .then(function (answer) {
        let selection = "SELECT * FROM products WHERE item_id=?";

        connection.query(selection, [answer.choice], function (err, res) {
        let stock = res[0].stock_quantity;
        if (stock >= answer.quantity) {
            let buy = "UPDATE products SET ? WHERE ?";
            connection.query(selection, [
                {
                    stock_quantity: (stock - parseInt(answer.quantity))
                },
                {
                    item_id: answer.choice
                }
            ],
            function (err, resp) {
                let totalPrice = answer.quantity * res[0].price;
                console.log("You purchased " + answer.quantity + " of " + res[0].product_name + " for " + totalPrice + " dollars.");
            })
        } else {
            console.log("Sorry, insufficient stock. Cannot process your request.\nPlease make another selection.");
            start();
        }
        })
    })
};
