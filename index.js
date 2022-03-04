const express=require('express');
const cors = require('cors')
const app=express();
const PORT = 5000 || 3000


const {createEmployee,createTeam,createEmployeeAssignment}=require('./create')
const {getAllEmployees,getAllTeams,getEmployee,getTeam}=require('./read')
const {updateEmployee,updateTeam}=require('./update')
const {deleteEmployee,deleteTeam,deleteEmployeeAssignment}=require('./delete')
const {} = require('./update')


var corsOptions ={
    origin:'http://example.com',
    optionSuccessStatus:200
}

app.use(express.json());

app.post("/employee", createEmployee);
app.post("/team", createTeam);
app.post("/employeeassignment",createEmployeeAssignment);

app.get('/employees',cors(), getAllEmployees)
app.get('/teams',cors(), getAllTeams)
app.get('/employee/:id',cors(), getEmployee)
app.get('/team/:id',cors(), getTeam)

app.put("/employee/:id",cors(corsOptions),updateEmployee)
app.put("/team/:id",cors(corsOptions),updateTeam)

app.delete("/employee/:id",deleteEmployee)
app.delete("/team/:id",deleteTeam)
app.delete("/employeeassign/:employee_id/:team_id",deleteEmployeeAssignment)


app.listen(PORT,()=>{
    console.log(`The server listerning on port ${PORT}`);
})