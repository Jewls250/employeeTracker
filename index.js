const mysql = require("mysql");
const fs = require('fs')
const inquirer = require('inquirer');
const BottomBar = require("inquirer/lib/ui/bottom-bar");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Lucaserawop",
  database: "employee_tracker",
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});

const runSearch = () => {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "Add departments",
        "Add roles",
        "Add employees",
        "View departments",
        "View employees",
        "View roles",
        "Update employee role",
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case "Add departments":
          addDepartment()
          break;

        case "Add roles":
          addRoles()
          break;

        case "Add employees":
          addEmployees()
          break;

        case "View departments":
          veiwDepartment()
          break;

        case "View employees":
          viewEmployee()
          break;

        case "View roles":
          viewRoles()
          break;

        case "Update employee role":
          updateEmployeeRole()
          break;

        default:
          console.log(`Invalid action: ${answer.action}`);
          break;
      }
    });
};

const addDepartment = () => {
  inquirer
    .prompt({
      name: "addDepartment",
      type: "input",
      message: "What department would you like to add?",
    })
    .then((answer) => {
      const query = connection.query(
        "INSERT INTO department SET ?",
        {
          department_name: answer.addDepartment,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} product inserted!\n`)
        }
      );

  // logs the actual query being run
  console.log(query.sql);
  runSearch()

  });
};

const addRoles = () => {
  inquirer
    .prompt({
      name: "addRoles",
      type: "input",
      message: "What roles would you like to add?",
    })
    .then((answer) => {
      const query = connection.query(
        "INSERT INTO employee_role SET ?",
        {
          title: answer.addRoles,
          
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} product inserted!\n`);
        }
      );

      // logs the actual query being run
      console.log(query.sql);
      runSearch()
    });
};

const addEmployees = () => {
  inquirer
    .prompt({
      name: "addEmployees",
      type: "input",
      message: "Would you like to add any new employees?",
    })
    .then((answer) => {
      const query = connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.addEmployees,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} product inserted!\n`);
        }
      );

      // logs the actual query being run
      console.log(query.sql);
      runSearch()
    });
};

const veiwDepartment = () => {
      const query = "SELECT * FROM department";
      connection.query(query, (err, res) => {
        res.forEach((department) => {
          console.log(
            `Departments: ${department.department_name} `
          );
        });
        runSearch();
    });
};

const viewRoles = () => {
      const query = "SELECT * FROM employee_role";
      connection.query(query, (err, res) => {
        res.forEach(({title, salary, id}) => {
          console.log(
            `Employee Info: Job Titile: ${title}, Salary: ${salary}, ID: ${id}`
          );
        });
        runSearch();
    });
};

const viewEmployee = () => {
      const query = "SELECT * FROM employee";
      connection.query(query, (err, res) => {
        res.forEach(({ first_name }) => {
          console.log(
            `Name: ${first_name}`
          );
        });
        runSearch();
    });
};

const updateEmployeeRole = () => {
  const query = "SELECT * FROM employee";
  let sort , employee_id;
  connection.query(query, (err, res) => {
        sort = res.map(({ first_name, last_name, id }) => {
          return {name: `${first_name} ${last_name}`, value: `${id}`}
        });
        console.log(sort)

        inquirer
          .prompt({
            name: "updating_employee",
            type: "list",
            message: "Who would you like to update?",
            choices: sort,
          })
      .then((res) => {
        const query = "SELECT * FROM employee_role";
        let title_list;
        employee_id = res.updating_employee
        connection.query(query, (err, res) => {
          title_list = res.map(({ title, id }) => {
            return {name: `${title}`, value: `${id}`}
        });
          console.log(title_list)

         

        inquirer
          .prompt({
            name: "changing_role",
            type: "list",
            message: "What role are they changing?",
            choices: title_list,
          }).then((answer) => {
             const query = connection.query(
               "UPDATE employee SET role_id = ? WHERE id = ?",
               [  answer.changing_role , employee_id ],
               (err, res) => {
                 if (err) throw err;
                 console.log(`${res.affectedRows} product inserted!\n`);
               }
             );
          })
      });
    })
  });
}
