DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INT(5) NOT NULL AUTO_INCREMENT,
product_name VARCHAR(30) NULL,
department_name VARCHAR(30) NULL,
price DECIMAL(6,2) NULL,
stock_quantity INT(10) NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (0001, "car battery", "auto", 80.00, 12),
 (0002, "leaf blower", "garden & patio", 110.99, 8),
 (0003, "microwave", "kitchen", 80.00, 20),
 (0004, "golf club", "sports", 199.99, 30),
 (0005, "House of Leaves (novel)", "books", 14.99, 9),
 (0006, "cast iron pan", "kitchen", 8.99, 19),
 (0007, "shower head", "bath", 13.99, 17),
 (0008, "computer mouse", "electronics", 12.50, 31),
 (0009, "tool kit", "hardware", 50.99, 15),
 (0010, "shower curtain", "bath", 9.99, 24)