const inquirer = require("inquirer");
const fs = require("fs");

// Array with needed questions
const questions = [
    {
        type: "input",
        message: "Type 3 characters for the logo",
        name: "text"
    },
    {
        type: "list",
        message: "Choose a shape",
        name: "shape",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        message: "Type a color keyword or a hexadecimal number for background",
        name: "backgorund"
    },
    {
        type: "input",
        message: "Type a color keyword or a hexadecimal number for text",
        name: "textColor"
    }
]


function init() {
    inquirer.prompt(questions).then((answers) => {
        
      });
}

// Function call to initialize app
init();
