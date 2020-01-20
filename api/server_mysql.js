const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const mysqlconnection = require('./connection');
const EmployeesRoutes = require('./routes/employees');

const port = process.env.PORT||8080;

const app = express()
.use(bodyParser.json())
.use(cors());

app.use("/xelp", EmployeesRoutes);

app.listen(port,()=>{
	console.log(`Intranet NodeJS server is running on port ${port}`);
});