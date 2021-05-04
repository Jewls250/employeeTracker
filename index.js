const mysql = require("mysql");
const fs = require('fs')
const inquirer = require('inquirer')

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
        "INSERT INTO roles SET ?",
        {
          role_name: answer.addRoles,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} product inserted!\n`);
        }
      );

      // logs the actual query being run
      console.log(query.sql);
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
        "INSERT INTO employees SET ?",
        {
          role_name: answer.addEmployees,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`${res.affectedRows} product inserted!\n`);
        }
      );

      // logs the actual query being run
      console.log(query.sql);
    });
};

const veiwDepartment = () => {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What artist would you like to search for?",
    })
    .then((answer) => {
      const query = "SELECT position, song, year FROM top5000 WHERE ?";
      connection.query(query, { artist: answer.artist }, (err, res) => {
        res.forEach(({ position, song, year }) => {
          console.log(
            `Position: ${position} || Song: ${song} || Year: ${year}`
          );
        });
        runSearch();
      });
    });
};

const viewRoles = () => {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What artist would you like to search for?",
    })
    .then((answer) => {
      const query = "SELECT position, song, year FROM top5000 WHERE ?";
      connection.query(query, { artist: answer.artist }, (err, res) => {
        res.forEach(({ position, song, year }) => {
          console.log(
            `Position: ${position} || Song: ${song} || Year: ${year}`
          );
        });
        runSearch();
      });
    });
};

const viewEmployee = () => {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What artist would you like to search for?",
    })
    .then((answer) => {
      const query = "SELECT position, song, year FROM top5000 WHERE ?";
      connection.query(query, { artist: answer.artist }, (err, res) => {
        res.forEach(({ position, song, year }) => {
          console.log(
            `Position: ${position} || Song: ${song} || Year: ${year}`
          );
        });
        runSearch();
      });
    });
};

const updateEmployeeRole = () => {
  inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "What artist would you like to search for?",
    })
    .then((answer) => {
      const query = "SELECT position, song, year FROM top5000 WHERE ?";
      connection.query(query, { artist: answer.artist }, (err, res) => {
        res.forEach(({ position, song, year }) => {
          console.log(
            `Position: ${position} || Song: ${song} || Year: ${year}`
          );
        });
        runSearch();
      });
    });
};
