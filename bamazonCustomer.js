const mysql = require("mysql");
const inquirer = require("inquirer");


let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "bamazon__DB"
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
  }
  displayItems();
});

let displayItems = () => {
	connection.query("SELECT * FROM Products", function(err, data){
		if(err) throw err;

		console.log();
		console.log("---------- Welcome BAMAZON ----------");
		console.log("--------------------------------------------------------------------------------------------------");
		for(var i= 0; i < data.length; i++){
			console.log("Item ID: " + data[i].id + " | " + "Product Name: " + data[i].product + " | " + "Department Name: " + data[i].department_name + " | " + "Price: " + data[i].price + " | " + "Stock Quantity: " + data[i].stock_quantity);
			console.log("--------------------------------------------------------------------------------------------------");
		}
		inquirerToBuy();
	});
};

function inquirerToBuy(){
	inquirer.prompt([{
		type: "input",
		name: "id",
        message: "What is the ID of buy?"
   	},
	{
		type: "input",
		name: "units",
		message: "How many units of the product you would like to buy?"
	}]).then(function(answer){
		var buyid = answer.id;
		var quantitys = answer.units;
		totalProduct(buyid, quantitys);
	});
};

function totalProduct(id, quntityStocks){
	connection.query("SELECT * FROM Products WHERE id = " + id, function(err, data){
		if (err) throw err;

		if (quntityStocks <= data[0].stock_quantity){
			var totals = data[0].price * quntityStocks;
			console.log("Your total for " + quntityStocks + ", " + data[0].product + " is " + totals + ". Thank you for order with items.");
			connection.query("UPDATE Products SET stock_quantity = stock_quantity - " + quntityStocks + " WHERE id = " + id);

			connection.query("SELECT * FROM Departments", function(err, data){
				var name;
				for(var i = 0; i < data.length; i++){																					
					if(data[i].department_name === id.department_name){
						name = i;
					}
				}
		
			});
		} 
		else {
			console.log("Our apologies, Insufficient Quantity!" + data[0].product + " to fulfill your order.");
		}
	});
};


