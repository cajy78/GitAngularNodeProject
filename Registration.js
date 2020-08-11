const express = require('express');
const bodyParser = require('body-parser');
const dbApp = express();
var mysql = require("mysql");

dbApp.use(bodyParser.urlencoded({extended:true})); 

dbApp.post('/registerCustomer', (req, res) => {
	
	// con object initialised to create MYSQL connection with MYSQL host, db, username and password
	var con = mysql.createConnection({
		host: "localhost",
		user: "GitProject",
		password: "P@$$w0rd@123",
		database: "gitangulardb"
	});
	
	//Connection established with db - INSERT operation completed, and connection closed.
	con.connect(function(err){
		console.log("Database Connected Successfully");
		var sqlquery = "INSERT INTO customerinfo(fname, mname, lname, gender, age, email, apartments, location, pincode, city) VALUES('"+req.body.FirstName+"', '"+req.body.MiddleName+"', '"+req.body.LastName+"', '"+req.body.Gender+"', '"+parseInt(req.body.Age)+"', '"+req.body.Email+"', '"+req.body.Apartments+"', '"+req.body.Location+"', '"+req.body.Pincode+"', '"+req.body.City+"')";
		
		//function to execute insert and close db connection.
		con.query(sqlquery, function(err, result){
			if(err) throw err;
			console.log("Registration details added. Number of Customers created: "+result.affectedRows);
			con.end(function(err){
				if(err) throw err;
				console.log("Database Connection ended");
			});
		});
		
		//output html response object to display response as HTML page.
		res.writeHead(200,{'content-type':'text/html'});
		res.write('Following details have been added to the mysql database gitangulardb - via this nodejs application <br><br>');
		res.write('Full Name:' + req.body.FirstName + ' ' + req.body.MiddleName + ' ' + req.body.LastName +'<br>');
		res.write('Gender:' + req.body.Gender +'<br>');
		res.write('Age:' + req.body.Age +'<br>');
		res.write('Email:' + req.body.Email +'<br>');
		res.write('apartments:' + req.body.Apartments +'<br>');
		res.write('Location:' + req.body.Location +'<br>');
		res.write('Pin Code:' + req.body.Pincode +'<br>');
		res.write('City:' + req.body.City +'<br>');
		res.end();
	});
});

dbApp.listen(3000, () => {
  console.log('Server running on port 3000');
});