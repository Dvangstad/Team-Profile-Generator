const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const fs = require("fs");

let employees = []

function start() {
    inquirer.prompt([
        {
            message: "What is the Manager's name?",
            name: "managerName"
        },
        {
            message: "Id?",
            name:"id"
        },
        {
            message: "email?",
            name: "email"
        },
        {
            message: "office?",
            name: "officeNum"
        }
    ]).then(response => {
        let newManager = new Manager(response.managerName, response.id, response.email, response.officeNum)
        console.log(newManager)
        employees.push(newManager)
        optionQ()
    })
}

function optionQ () {
    inquirer.prompt([
        {
            message: "What new employee would you like to add?",
            name: "choice",
            type: "list",
            choices: ["Engineer", "Intern", "No more"]
        }
    ]).then(({choice}) => {
        if(choice !== "No more"){
            employeeQuestions(choice)
        }else {
            createHTML()
        }
    })
}

function employeeQuestions(choice) {
    if(choice == "Engineer"){
        //ask about engineer similar to manager
        console.log(choice)
        optionQ()
    }else {
        //ask about Inter similar to manager
        console.log(choice)
        optionQ()
    }
}

function createHTML() {
    fs.writeFile("./dist/template.html", JSON.stringify(employees), err => {
        if (err) throw err
    })
}

start()