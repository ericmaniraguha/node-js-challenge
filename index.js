const express=require('express');
const app=express();
const PORT = 5000 || 3000


const {createEmployee,createTeam,createEmployeeAssignment}=require('./create')
const {getAllEmployees,getAllTeams,getEmployee,getTeam}=require('./read')
const {updateEmployee,updateTeam}=require('./update')
const {deleteEmployee,deleteTeam,deleteEmployeeAssignment}=require('./delete')
const {} = require('./update')

app.use(express.json());

app.post("/employee", createEmployee);
app.post("/team", createTeam);
app.post("/employeeassignment",createEmployeeAssignment);

app.get('/employees', getAllEmployees)
app.get('/teams', getAllTeams)
app.get('/employee/:id', getEmployee)
app.get('/team/:id', getTeam)

app.put("/employee/:id",updateEmployee)
app.put("/team/:id",updateTeam)

app.delete("/employee/:id",deleteEmployee)
app.delete("/team/:id",deleteTeam)
app.delete("/employeeassign/:employee_id/:team_id",deleteEmployeeAssignment)


app.listen(PORT,()=>{
    console.log(`The server listerning on port ${PORT}`);
})