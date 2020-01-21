
const mysql = require('mysql');
const connection = mysql.createConnection({
	host:'127.0.0.1',
	port: 3306,
	user : 'root',
	password: 'root',
	database: 'intranet',
	multipleStatements: true
});

connection.connect((err)=>{
	if(!err){
		console.log("Connected to mysql");
	} else{
		console.log(err);
		console.log("Connection failed to mysql");
	}
});

module.exports = connection;