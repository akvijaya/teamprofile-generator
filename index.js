// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require("path");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

//const directory = path.join(__dirname, "/src/", "team.html");

let employeeManager = [];
let employeeIntern = [];
let employeeEngineer = [];
let employeeRegular = [];

const mainMenu = () => {
    inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: 'Choose an action',
            choices: [
                'Create An Employee',
                'Create A Manager',
                'Create A Intern',
                'Create A Engineer',
                'Exit'
            ],
        },
    ])
        .then((data) => {
            switch (data.action) {
                case 'Create An Employee':
                    createEmployee();
                    break;

                case 'Create A Manager':
                    createManager();
                    break;

                case 'Create A Intern':
                    createIntern();
                    break;

                case 'Create A Engineer':
                    createEngineer();
                    break;

                case 'Exit':
                    generateHTML();
                    connection.end();
                    break;
            }
        })
        .catch((err) => console.log("Error message: ", err));
};

const createEmployee = () => {
    inquirer
        .prompt([
            {
                type: "text",
                name: "employeename",
                message: "Enter your name:"
            },

            {
                type: "text",
                name: "employeeid",
                message: "Enter your employee id:"
            },

            {
                type: "text",
                name: "employeeemail",
                message: "Enter your email:"
            },

        ])

        .then(({ employeename, employeeid, employeeemail }) => {

            const employee = new Employee(employeename, employeeid, employeeemail);
            employeeRegular.push(employee);
            return mainMenu();
        });
};

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

        .then(({ managername, managerid, manageremail, officeNumber }) => {

            const manager = new Manager(managername, managerid, manageremail, officeNumber);
            employeeManager.push(manager);
            return mainMenu();
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

        .then(({ engname, engid, engemail, github }) => {

            const engineer = new Engineer(engname, engid, engemail, github);
            employeeEngineer.push(engineer);
            return mainMenu();
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

        .then(({ internname, internid, internemail, schoolname }) => {

            const intern = new Intern(internname, internid, internemail, schoolname);
            employeeIntern.push(intern);
            return mainMenu();
        });
};

const generateHTML = () => {

    const generateEmployee = (employee) => {
        let emp = `     
            <div class="card">

                <div class="card-header bg-primary text-center">
                    <span>${employee.name}<span>
                </div>

                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email:${employee.email}</li>
                    </ul>
                </div>

            </div>
        `;
        return emp;
    };


    const generateEngineer = (engineer) => {
        let eng = `     
        <div class="card">
            <div class="card-header bg-primary text-center">
                <span>${engineer.name}<span> 
            </div>

            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.id}</li>
                    <li class="list-group-item">Role:Engineer</li>
                    <li class="list-group-item">Email:${engineer.email}</li>
                    <li class="list-group-item">Github: ${engineer.github}</li>
                </ul>
            </div>

        </div>
    `;
        return eng;
    };

    const generateIntern = (intern) => {
        let inte = `     
        <div class="card">
            <div class="card-header bg-primary text-center">
                <span\>${intern.name}<span> 
            </div>

            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.id}</li>
                    <li class="list-group-item">Role:Intern</li>
                    <li class="list-group-item">Email:${intern.email}</li>
                    <li class="list-group-item">School Name: ${intern.schoolname}</li>
                </ul>
            </div>

        </div>
    `;
        return inte;
    };

    const generateManager = (manager) => {
        console.log (manager);
        let mngr = `     
        <div class="card">
            <div class="card-header bg-primary text-center">
                <span >${manager.name}<span> 
            </div>

            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item">Role:Manager</li>
                    <li class="list-group-item">Email:${manager.email}</li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>

        </div>
    `;
        return mngr;
    };

    htmlEngineer = generateEngineer(employeeEngineer);
    htmlIntern = generateIntern(employeeIntern);
    htmlEmployee = generateEmployee(employeeRegular);
    htmlManager = generateManager(employeeManager);

    mainHTML =  `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>My Team</title>
                        </head>
                        <body> `; + 
                        htmlEngineer + htmlIntern + htmlEmployee + htmlManager +
                        
                        ` </body>
                        </html>`;

    fs.writeFileSync('./gen.html', mainHTML, "utf-8");
};

mainMenu();