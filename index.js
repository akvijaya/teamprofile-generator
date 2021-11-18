// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let myTeam = [];

const createManager = () => {
  inquirer
    .prompt([
      {
        type: "text",
        name: "managername",
        message: "Enter your name:"
      },

      {
        type: "text",
        name: "managerid",
        message: "Enter your employee id:"
      },

      {
        type: "text",
        name: "manageremail",
        message: "Enter your email:"
      },

      {
        type: "text",
        name: "officeNumber",
        message: "Enter your office number: "
      },

    ])

    .then(({ name, id, email, officeNumber }) => {
      const manager = new Manager(managername, managerid, manageremail, officeNumber);
      myTeam.push(manager);
      selectTeam();
    });
};

const createEngineer = () => {
    inquirer
      .prompt([
        {
          type: "text",
          name: "engname",
          message: "Enter your name:"
        },
  
        {
          type: "text",
          name: "engid",
          message: "Enter your employee id:"
        },
  
        {
          type: "text",
          name: "engemail",
          message: "Enter your email:"
        },
  
        {
          type: "text",
          name: "github",
          message: "Enter your github username:"
        },
  
      ])
  
      .then(({ name, id, email, github }) => {
        const engineer = new Engineer(engname, engid, engemail, github);
        myTeam.push(engineer);
        selectTeam();
    });
};

const createIntern = () => {
    inquirer
      .prompt([
        {
          type: "text",
          name: "internname",
          message: "Enter your name:"
        },
  
        {
          type: "text",
          name: "internid",
          message: "Enter your employee id:"
        },
  
        {
          type: "text",
          name: "internemail",
          message: "Enter your email:"
        },
  
        {
          type: "text",
          name: "schoolname",
          message: "Enter your school name:"
        },
  
      ])
  
      .then(({ name, id, email, schoolname }) => {
        const intern = new Intern(internname, internid, internemail, schoolname);
        myTeam.push(intern);
        selectTeam();
    });
};