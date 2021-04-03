const fs = require('fs')
const inquirer = require('inquirer')


let questions = [
  {
    type: "list",
    name: "addDepartment",
    message: "What department would you like to add?",
    choices: [],
  },
  {
    type: "list",
    name: "addRoles",
    message: "What role would you like to add?",
    choices: [],
  },
  {
    type: "list",
    name: "addEmployees",
    message: "Who is the new employee?",
    choices: [],
  },
  {
    type: "list",
    name: "viewDepartments",
    message: "What department would you like to view?",
    choices: [],
  },
  {
    type: "list",
    name: "viewRole",
    message: "What role would you like to view?",
    choices: [],
  },
  {
    type: "list",
    name: "viewEmployee",
    message: "What employee would you like to view?",
    choices: [],
  },
  {
    type: "list",
    name: "updateEmployeeRole",
    message: "What employee role would you like to update?",
    choices: [],
  },
  {
    type: "list",
    name: "updateEmployeeManager",
    message: "What employee manager would you like to update?",
    choices: [],
  },
  {
    type: "list",
    name: "viewEmployeeManager",
    message: "What manager would you like to view?",
    choices: [],
  },
  {
    type: "list",
    name: "deleteDepartment",
    message: "What department would you like to delete?",
    choices: [""],
  },
  {
    type: "list",
    name: "deleteRole",
    message: "What role would you like to delete?",
    choices: [""],
  },
  {
    type: "list",
    name: "deleteEmploylee",
    message: "What employlee would you like to delete?",
    choices: [""],
  },
  {
    type: "list",
    name: "viewUtiliezedBudget",
    message: "This is your utilized budget.",
    choices: [""],
  },
  {
    type: "list",
    name: "totalBudget",
    message: "This is your total budget.",
    choices: [""],
  },
];

