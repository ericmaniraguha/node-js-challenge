const express = require('express');
const app = express();
const pool = require('./db');

app.use(express.json());

app.post('/employee', async(req, res) =>{
    try{
        const {name, date_of_joining, designation, gender, email, bio} = req.body;
        console.log(req.body);
        console.log(name);

        // res. we are receiving from the db
        const employeeData= await pool.query("INSERT INTO EMPLOYEE(name,date_of_joining,designation,gender,email,bio) VALUES($1,$2,$3,$4,$5,$6) returning *",
        [name,date_of_joining,designation, gender, email,bio])
            res.json(employeeData.rows[0]);
                    
    }catch(error){
        res.status(500).json(error);
    }
})

//team table
app.post('/team', async(req, res) =>{
    try{
        const {name,email, description} = req.body;
        console.log(req.body);


        // res. we are receiving from the db
        const teamData= await pool.query("INSERT INTO TEAM(name,email,description) VALUES($1,$2,$3) returning *",
        [name,email,description])
            res.json(teamData.rows[0]);
                    
    }catch(error){
        res.status(500).json(error);
    }
})

//employeedesignation table
app.post('/employeeassignment', async(req, res) =>{
    try {
        const {employee_id,team_id}=req.body;
        console.log(req.body);

        const employeeAssignmentData= await pool.query("INSERT INTO EMPLOYEE_ASSIGNMENT(employee_id,team_id) VALUES($1,$2) returning *",
                    [employee_id,team_id])
        res.json(employeeAssignmentData.rows[0]);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

// get all employees

app.get('/employees', async (req, res) =>{
    try{
       const employeesData = await pool.query("SELECT * FROM EMPLOYEE");
       res.json(employeesData.rows);
    }catch(error){
          res.status(500).json(error)
    }
})


// get all team

app.get('/team', async (req, res) =>{
    try{
       const teamData = await pool.query("SELECT * FROM TEAM");
       res.json(teamData.rows);
    }catch(error){
          res.status(500).json(error)
    }
})

// get one employees

app.get('/employee/:id', async (req, res) =>{
    try{
        const {id} = req.params;
        let data = {};
        const teamData=await pool.query("SELECT * FROM TEAM WHERE id =$1",[id]);
        const employees = await pool.query("SELECT * FROM EMPLOYEE WHERE ID IN (SELECT team_id  from  EMPLOYEE_ASSIGNMENT where TEAM_ID=$1)",[id]);

        data=teamData.rows[0];
        if(data){
            data.employees=employees.rows
        }else{
            data={
                info:"No team data found for this id"
            }
        }
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

//create a server
app.listen(5000, ()=>{
    console.log("Server listening on port 5000");
})