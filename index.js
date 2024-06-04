const inquirer = require("inquirer");
const Circle = require('./lib/circle.js')
const Triangle = require('./lib/triangle.js')
const Square = require('./lib/square.js')
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


function writeToFile(fileName, data) {
    
    fs.writeFile(`${data.title.replace(/\s+/g, '_')}_${fileName}.md`, readMeCreator.generateMarkdown(data), (error) => {
      if (error) {
        console.log(error);
      }
    });
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(({text, shape, backgorund, textColor}) => {
    let shapeLogo;
    switch(shape){
        case "Circle":
            shape = new Circle();
            break;
        case "Triangle":
            shape = new Triangle();
            break;
        case "Square":
            shape = new Square();
            break;
        default:
            console.log("That's what you want it? You kill this app :(")
            break;
    }
    shape.set
  });
}


// Function call to initialize app
init();
