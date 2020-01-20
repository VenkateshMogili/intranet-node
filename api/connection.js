
const mysql = require('mysql');
const connection = mysql.createConnection({
	/*optional fields*/
//	host:'127.0.0.1',
// 	port: 3308,
//  multipleStatements: true,
	/*Mandatory fields*/
	user : 'root',
	password: 'root',
	database: 'intranet'
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