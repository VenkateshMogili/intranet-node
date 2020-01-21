const express = require('express');
const router = express.Router();
const db = require('../connection');

module.exports = {
//create employee
addEmployee: (req,res)=>{
	console.log("/addEmployee");
	console.log("userData",req.body);
	db.query("INSERT INTO employees SET ?",req.body,(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"id":results.insertId,"message":"Employee Added Successfully..."}));
	});
},
//fet all employees
getEmployees:(req,res)=>{
	console.log("/getEmployees");
	db.query("SELECT *, NULL as password FROM employees",(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"userData":results,"message":"Employees Fetched Successfully..."}));
	});
},
//fet all employees
getEmployee:(req,res)=>{
	let employee_id = req.params.employee_id;
	console.log("/getEmployees/"+employee_id);
	db.query("SELECT *, NULL as password FROM employees WHERE id=?",[employee_id],(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"userData":results,"message":"Employees Fetched Successfully..."}));
	});
},
//login
loginEmployee: (req,res)=>{
	let email = req.body.email;
	let password = req.body.password; 
	console.log("/login/"+email+"/"+password);
	db.query("SELECT * FROM employees WHERE email=? and password=? and status='active'",[email,password],(err,results)=>{
		if(err) throw err;
		if(results.length<=0) res.send(JSON.stringify({"status":500,"message":"Invalid Email or Password"}));
		if(results.length==1) res.send(JSON.stringify({"status":200,"message":"Logged In Successfully..."}));
	});
},
//edit employee
editEmployee: (req,res)=>{
	let data = req.body;
	let id = req.body.employee_id;
	console.log("/editEmployee/"+id);
	db.query("UPDATE employees SET ? WHERE id=?",[data,id],(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"message":"Employee Details Updated Successfully..."}));
	});
},

//delete employee
removeEmployee: (req,res)=>{
	let id = req.body.employee_id;
	console.log("/removeEmployee/"+id);
	db.query("UPDATE employees SET status='inactive' WHERE id=? and status='active'",[id],(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"message":"Employee Removed Successfully..."}));
	});
}

}