DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE Products (
  id INT(10) AUTO_INCREMENT NOT NULL,
  product VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity DECIMAL(10) NULL,
  PRIMARY KEY (id)
);

SELECT * FROM Products;

INSERT INTO Products (
	product, department_name, price, stock_quantity
) VALUES
	('iphone', 'Electronics', 120.00, 100),
	('sandles', 'Shoes', 15.99, 120),
	('diapers', 'Baby', 20.00, 300),
	('tennis balls', 'Sports and Outdoors', 15.00, 70),
	('lawn chairs', 'Patio and Garden', 40.00, 30),
	('hoop earrings', 'Accessories', 20.99, 250),
	('TV', 'Electronics', 399.99, 10000),
	('pink swimsuit', 'Clothing', 65.99, 65),
	('Paige jeans', 'Clothing', 45.95, 25),
	('Lion', 'Entertaiment', 18.95, 15),
	('Crash', 'Entertaiment', 18.95, 20);

CREATE TABLE Departments (
	department_id INT(10) AUTO_INCREMENT NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	over_head_costs DECIMAL(10,2) NOT NULL,
	product_sales DECIMAL(10,2),
	total_profit DECIMAL(10,2) NULL,
	PRIMARY KEY(department_id)
);

INSERT INTO Departments (department_name, over_head_costs)
VALUES 
('Electronics', 1000),
('Shoes', 2000),
('Baby', 2000),
('Sports and Outdoors', 1000),
('Patio and Garden', 300),
('Accessories', 500),
('Entertaiment', 500),
('Clothing', 2000);




