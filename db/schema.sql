DROP DATABASE IF EXISTS employee_tracker;
CREATE database employee_tracker;

USE employee_tracker;

CREATE TABLE department {
    id INT PRIMARY KEY,
    department_name VARCHAR(30),
    PRIMARY KEY
};

CREATE TABLE employee_role {
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL ,
    department_id INT 
    PRIMARY KEY,
}

CREATE TABLE employee {
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY,
}

SELECT * FROM department
SELECT * FROM employee_role
SELECT * FROM employee