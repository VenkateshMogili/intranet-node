const express = require('express');
const router = express.Router();
const db = require('../connection');

module.exports = {
//apply Leave
applyLeave: (req,res)=>{
	console.log("/applyLeave");
	console.log("leaveData",req.body);
	db.query("INSERT INTO leaves SET ?",req.body,(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"id":results.insertId,"message":"Leave Applied Successfully..."}));
	});
},
//get Leave History
leaveHistory: (req,res)=>{
	let id = req.params.employee_id;
	console.log("/leaveHistory/"+id);
	db.query("UPDATE employees SET status='inactive' WHERE id=? and status='active'",[id],(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"message":"Employee Removed Successfully..."}));
	});
}

}