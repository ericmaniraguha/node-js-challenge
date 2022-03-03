![Screenshot from 2022-03-04 01-11-51](https://user-images.githubusercontent.com/44385819/156668622-11bd3b19-c73d-4db9-8ecc-3949b96c154c.png)
![Screenshot from 2022-03-04 01-10-13](https://user-images.githubusercontent.com/44385819/156668458-7be1f775-9d6b-4029-bb6b-233b5af3d382.png)
1. How to create Node JS server 
2. Create sequence and table in Postgres
3. Create Rest endpoint using Node JS and perform CRUD operation in Postgres
4. Test rest endpoint using postman
5. Learn CORS and implement it in REST endpoint
6. Swagger and Autogenerating Swagger Documentation
7. Testing using swagger UI

Tools:

Postgres
Postman
NodeJS
vscode

# steps start with postgres 
1. sequences - 

create sequence employee_seq increment 1 start 1;
create sequence team_seq increment 1 start 1;
create sequence employee_assignment_seq increment 1 start 1;

# 2.  create tables 

create table employee(
   id integer NOT NULL DEFAULT nextval('employee_seq'),
   name varchar(50) NOT NULL,
   date_of_joinig timestamp NOT NULL,
   designation varchar(25),
   gender varchar(10),
   email varchar (50),
   bio varchar(500),
   constraint emp_cons PRIMARY KEY(id)
);

create table team(
    id integer NOT NULL DEFAULT nextval('team_seq'),
	name varchar(50) NOT NULL,
	email varchar(50),
	description varchar(500),
	constraint team_cons PRIMARY KEY(id)
);

create table employee_assignment(
      id integer NOT NULL DEFAULT nextval('employee_assignment'),
	  employee_id integer NOT NULL,
	  team_id integer NOT NULL,
	  constraint employee_assignment_cons PRIMARY KEY(id),
	  constraint fk_employee FOREIGN KEY (employee_id) REFERENCES employee(id),
	  constraint fk_team FOREIGN KEY (team_id) REFERENCES team(id)
);


# 3. create end points using Node JS
steps: create employee, create team, create employee assignment 

# 4. operations 
read 
get all employees
get all teams
get employee
get team

update
update employee

delete
delete employee
delete team
delete employee assignment

# 5. install some dependencies 
npm init
npm install cors express pg -s 
npm i touch-cli -g
npm i nodemon -g

# 6. create data using postman - post using
http://localhost:5000/employee
