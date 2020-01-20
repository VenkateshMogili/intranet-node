const express = require('express');
const router = express.Router();
const db = require('../connection');


router.get("/getbooks",(req,res)=>{
	db.query("SELECT * FROM book",(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"data":results}));
	});
});


router.get("/getbook/:id",(req,res)=>{
	db.query("SELECT * FROM book WHERE id="+req.params.id,(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"data":results}));
	});
});

router.get("/addbook/:title/:author",(req,res)=>{
	var title=req.params.title;
	var author=req.params.author;
	var data = {title:title,author:author};
	console.log(author);
	db.query("INSERT INTO book SET ?",data,(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"data":results}));
	});
});

router.post("/addbook",(req,res)=>{
	console.log(req.body);
	db.query("INSERT INTO book SET ?",req.body,(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"data":results}));
	});
});

router.put("/addbook/:id",(req,res)=>{
	db.query("UPDATE book SET ? WHERE id='"+req.params.id+"'",req.body,(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"data":results}));
	});
});

router.delete("/deletebook/:id",(req,res)=>{
	db.query("DELETE FROM book WHERE id='"+req.params.id+"'",(err,results)=>{
		if(err) throw err;
		res.send(JSON.stringify({"status":200,"data":results}));
	});
});

module.exports = router;