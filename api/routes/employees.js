const express = require('express');
const router = express.Router();
const db = require('../connection');

//create employee
router.post("/addEmployee",(req,res)=>{
	db.query("INSERT INTO employees SET ?",req.body,(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"id":results[0].id,"message":"Employee Added Successfully..."}));
	});
});
//login
router.post("/login",(req,res)=>{
	let email = req.body.email;
	let password = req.body.password; 
	db.query("SELECT * FROM employees WHERE email=? and password=? and status='active'",[email,password],(err,results)=>{
		if(err) throw err;
		if(results.length<=0) res.send(JSON.stringify({"status":500,"message":"Invalid Email or Password"}));
		if(results.length==1) res.send(JSON.stringify({"status":200,"message":"Logged In Successfully..."}));
	});
});
//edit employee
router.put("/editEmployee",(req,res)=>{
	let data = req.body;
	let id = req.body.employee_id;
	db.query("UPDATE employees SET ? WHERE id=?",[data,id],(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"message":"Employee Details Updated Successfully..."}));
	});
});

//delete employee
router.put("/removeEmployee",(req,res)=>{
	let id = req.body.employee_id;
	db.query("UPDATE employees SET status='inactive' WHERE id=? and status='active'",[id],(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"message":"Employee Removed Successfully..."}));
	});
});

module.exports = router;