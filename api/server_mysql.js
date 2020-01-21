const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const mysqlconnection = require('./connection');
const {addEmployee, getEmployees, getEmployee, loginEmployee, editEmployee, removeEmployee} = require('./routes/employees');
// const {applyLeave, leaveHistory, pendingLeave, approveLeave, rejectLeave} = require('./routes/leaves');

const port = process.env.PORT||8080;

const app = express()
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true }))
.use(cors());

const baseUrl = '/xelp';

//Employee API's
app.post(baseUrl+'/addEmployee', addEmployee);
app.post(baseUrl+'/login', loginEmployee);
app.put(baseUrl+'/editEmployee', editEmployee);
app.delete(baseUrl+'/removeEmployee', removeEmployee);
app.get(baseUrl+'/getEmployees', getEmployees);
app.get(baseUrl+'/getEmployee/:employee_id', getEmployee);

//Leave Management API's
// app.post(baseUrl+'/applyLeave', applyLeave);
// app.get(baseUrl+'/pendingLeave/:employee_id', pendingLeave);
// app.get(baseUrl+'/leaveHistory/:employee_id', leaveHistory);
// app.put(baseUrl+'/approveLeave/:leave_id', approveLeave);
// app.put(baseUrl+'/rejectLeave/:leave_id', rejectLeave);

app.listen(port,()=>{
	console.log(`Intranet NodeJS server is running on port ${port}`);
});