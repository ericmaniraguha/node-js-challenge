const express=require('express');
const cors = require('cors');
const app=express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const PORT = 5000 || 3000


const {createEmployee,createTeam,createEmployeeAssignment}=require('./create')
const {getAllEmployees,getAllTeams,getEmployee,getTeam}=require('./read')
const {updateEmployee,updateTeam}=require('./update')
const {deleteEmployee,deleteTeam,deleteEmployeeAssignment}=require('./delete')

const swaggerOptions={
    definition:{
        openapi:'3.0.0',
        info:{
            title:"Employee Management API",
            description:"Employee API for empoyee management",
            contact:{
                name:"Eric Maniraguha",
                url:"https://eric-maniraguha.netlify.app/",
                email:"ericmaniraguha@gmail.com"
            },
            servers:["http://localhost:5000"]
        }
    },
    apis:["index.js"]
}

// create swagger docs
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

const {} = require('./update');
const { serve } = require('swagger-ui-express');


var corsOptions ={
    origin:'http://example.com',
    optionSuccessStatus:200
}

app.use(express.json());
// define definition -schema

/**
 * @swagger
 * definitions:
 *  Employee:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the employee
 *     example: 'ericmaniraguha'
 *    date_of_joining:
 *     type: string
 *     description: date of joining of the employee
 *     example: '2022-02-18'
 *    email:
 *     type: string
 *     description: email of the employee
 *     example: 'ericmaniraguha@gmail.com'
 *    gender:
 *     type: string
 *     description: gender of the employee
 *     example: 'male'
 *    bio:
 *     type: string
 *     description: biography of the employee
 *     example: 'father, AI engineer'
 *    designation:
 *     type: string
 *     description: designation of the employee
 *     example: 'Software Engineer'
 *  Team:
 *   type: object
 *   properties:
 *    name:
 *     type: string
 *     description: name of the team
 *     example: 'javascript pure'
 *    email:
 *     type: string
 *     description: email of the team
 *     example: 'javascript@heroalways.com'
 *    description:
 *     type: string
 *     description: description of the team
 *     example: 'java with spring boot'
 *  Employee_Assignment:
 *   type: object
 *   properties:
 *    employee_id:
 *     type: integer
 *     description: id of the employee
 *     example: 2
 *    team_id:
 *     type: integer
 *     description: id of the team
 *     example: 2
 */


 /**
  * @swagger
  * /employee:
  *  post:
  *   summary: create employee
  *   description: create employee for the organisation
  *   requestBody:
  *    content:
  *     application/json:
  *      schema:
  *       $ref: '#/definitions/Employee'
  *   responses:
  *    200:
  *     description: employee created succesfully
  *    500:
  *     description: failure in creating employee
  */
  app.post("/employee", createEmployee);
  /**
   * @swagger
   * /team:
   *  post:
   *   summary: create team
   *   description: create team
   *   parameters:
   *    - in: body
   *      name: body
   *      required: true
   *      description: body of the team
   *      schema:
   *       $ref: '#/definitions/Team'
   *   requestBody:
   *    content:
   *     application/json:
   *      schema:
   *       $ref: '#/definitions/Team'
   *   responses:
   *    200:
   *     description: success
   *    500:
   *     description : error
   */
  app.post("/team", createTeam);
  /**
   * @swagger
   * /employeeassignment:
   *  post:
   *   summary: create employee assignment
   *   description: create employee assignment
   *   parameters:
   *    - in: body
   *      name: body
   *      required: true
   *      description: employee assignment of the team
   *      schema:
   *       $ref: '#/definitions/Employee_Assignment'
   *   requestBody:
   *    content:
   *     application/json:
   *      schema:
   *       $ref: '#/definitions/Employee_Assignment'
   *   responses:
   *    200:
   *     description: success
   *    500:
   *     description: error
   */
  app.post("/employeeassignment",createEmployeeAssignment);
  
  /**
   * @swagger
   * /employees:
   *  get:
   *   summary: get all employees
   *   description: get all employees
   *   responses:
   *    200:
   *     description: success
   *    500:
   *     description: error
   */
  app.get('/employees',cors(), getAllEmployees)
  /**
   * @swagger
   * /teams:
   *  get:
   *   summary: get all teams
   *   description: get all teams
   *   responses:
   *    200:
   *     description: success
   */
  app.get('/teams',cors(), getAllTeams)
  /**
   * @swagger
   * /employee/{employee_id}:
   *  get:
   *   summary: get employee
   *   description: get employee
   *   parameters:
   *    - in: path
   *      name: employee_id
   *      schema:
   *       type: integer
   *      required: true
   *      description: id of the employee
   *      example: 2
   *   responses:
   *    200:
   *     description: success
   */
  app.get('/employee/:id',cors(), getEmployee)
  /**
   * @swagger
   * /team/{team_id}:
   *  get:
   *   summary: create team
   *   description: create team
   *   parameters:
   *    - in: path
   *      name: team_id
   *      schema:
   *       type: integer
   *      required: true
   *      description: id of the team
   *      example: 2
   *   responses:
   *    200:
   *     description: success
   */
  app.get('/team/:id',cors(), getTeam)
  
  /**
   * @swagger
   * /employee/{id}:
   *  put:
   *   summary: update employee
   *   description: update employee
   *   consumes:
   *    - application/json
   *   produces:
   *    - application/json
   *   parameters:
   *    - in: path
   *      name: id
   *      schema:
   *       type: integer
   *      required: true
   *      description: id of the employee
   *      example: 2
   *    - in: body
   *      name: body
   *      required: true
   *      description: body object
   *      schema:
   *       $ref: '#/definitions/Employee'
   *   requestBody:
   *    content:
   *     application/json:
   *      schema:
   *       $ref: '#/definitions/Employee'
   *   responses:
   *    200:
   *     description: success
   *     content:
   *      application/json:
   *       schema:
   *        $ref: '#/definitions/Team'
   */
  app.put("/employee/:id",cors(corsOptions),updateEmployee)
  
  
  /**
   * @swagger
   * /team/{id}:
   *  put:
   *   summary: update team
   *   description: update team
   *   consumes:
   *    - application/json
   *   produces:
   *    - application/json
   *   parameters:
   *    - in: path
   *      name: id
   *      schema:
   *       type: integer
   *      required: true
   *      description: id of the team
   *      example: 2
   *    - in: body
   *      name: body
   *      required: true
   *      description: body object
   *      schema:
   *       $ref: '#/definitions/Team'
   *   requestBody:
   *    content:
   *     application/json:
   *      schema:
   *       $ref: '#/definitions/Team'
   *   responses:
   *    200:
   *     description: success
   *     content:
   *      application/json:
   *       schema:
   *        $ref: '#/definitions/Team'
   */
  app.put("/team/:id",cors(corsOptions),updateTeam)
  
  /**
   * @swagger
   * /employee/{employee_id}:
   *  delete:
   *   summary: delete employee
   *   description: delete employee
   *   parameters:
   *    - in: path
   *      name: employee_id
   *      schema:
   *       type: integer
   *      required: true
   *      description: id of the employee
   *      example: 2
   *   responses:
   *    200:
   *     description: success
   */
  app.delete("/employee/:id",deleteEmployee)
  
  
  /**
   * @swagger
   * /team/{team_id}:
   *  delete:
   *   summary: delete team
   *   description: delete team
   *   parameters:
   *    - in: path
   *      name: team_id
   *      schema:
   *       type: integer
   *      required: true
   *      description: id of the team
   *      example: 2
   *   responses:
   *    200:
   *     description: success
   */
  app.delete("/team/:id",deleteTeam)
  /**
   * @swagger
   * /employeeassign/{employee_id}/{team_id}:
   *  delete:
   *   summary: delete employee assignment
   *   description: delete employee assignment
   *   parameters:
   *    - in: path
   *      name: employee_id
   *      schema:
   *       type: integer
   *      required: true
   *      description: id of the employee
   *      example: 12
   *    - in: path
   *      name: team_id
   *      schema:
   *       type: integer
   *      required: true
   *      description: id of the team
   *      example: 12
   *   responses:
   *    200:
   *     description: success
   */


app.listen(PORT,()=>{
    console.log(`The server listerning on port ${PORT}`);
})


// app.post("/employee", createEmployee);
// app.post("/team", createTeam);
// app.post("/employeeassignment",createEmployeeAssignment);

// app.get('/employees',cors(), getAllEmployees)
// app.get('/teams',cors(), getAllTeams)
// app.get('/employee/:id',cors(), getEmployee)
// app.get('/team/:id',cors(), getTeam)

// app.put("/employee/:id",cors(corsOptions),updateEmployee)
// app.put("/team/:id",cors(corsOptions),updateTeam)

// app.delete("/employee/:id",deleteEmployee)
// app.delete("/team/:id",deleteTeam)
// app.delete("/employeeassign/:employee_id/:team_id",deleteEmployeeAssignment)