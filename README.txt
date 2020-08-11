Instructions to run AngularJS - NodeJS registration form.

Pre-Requisites:
1. MYSQL Server with Database Named: GitAngularDB (DB name can be modified within Registration.js)
2. NodeJS Server

Pre-Requisites instructions.
1. Install NodeJS on machine.
2. install Node express, body-parser, and mysql driver using the following commands:
	a. npm -install express
	b. npm -install body-parser
	c npm -install mysql
	
Project Run Instructions:
1. Copy Registration.js within NodeJS Folder OR install above node modules within project folder itself.
2. Open cmd, navigate to the project location / location where the Registration.js file is located along with the Node Modules file.
3. Run command Node.exe Registration.js
4. Ensure mysql local instance is running and has the required database pre-created.
5. open index.html Either directly or via any server instance.
6. Update registration form and click on Create Account.

Data Flow:
- Data from registration form on index.html will "post" to Registration.js NodeJS Application on localhost:3000/registerCustomer.
- NodeJS server will then open DB connection to mysql database, insert record, close database connection - which will all be logged on console Output.
- Once completed, Registration.js will output response to HTML with information updated within Database.