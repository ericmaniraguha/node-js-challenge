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
