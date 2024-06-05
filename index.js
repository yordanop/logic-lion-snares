const inquirer = require("inquirer");
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const Logo = require('./lib/logo.js');
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
    
    
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(({text, shape, backgorund, textColor}) => {
    let shapeLogo;
    switch(shape){
        case "Circle":
            shapeLogo = new Circle();
            break;
        case "Triangle":
            shapeLogo = new Triangle();
            break;
        case "Square":
            shapeLogo = new Square();
            break;
        default:
            console.log("That's what you want it? You kill this app :(")
            break;
    }
    shapeLogo.setColor(backgorund);

    const svgCreate = new Logo();

    svgCreate.setText(text, textColor);
    svgCreate.getShape(shapeLogo);

    fs.writeFile(`./examples/${text}_logo.svg`, svgCreate.render(), (error) => {
        if (error) {
          console.log(error);
        }
      });

  });
}


// Function call to initialize app
init();
