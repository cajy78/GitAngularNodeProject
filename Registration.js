const express = require('express');
const bodyParser = require('body-parser');
const dbApp = express();
var mysql = require("mysql");

dbApp.use(bodyParser.urlencoded({extended:true})); 

dbApp.post('/registerCustomer', (req, res) => {});

dbApp.listen(3000, () => {
  console.log('Server running on port 3000');
});