// adding packages and objects needed
const inquirer = require("inquirer");
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const Logo = require('./lib/logo.js');
const fs = require("fs");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

// define max length of prompts/answers
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

// Array with needed questions
const questions = [
    {
        type: "maxlength-input",
        message: "Type 3 characters for the logo",
        name: "text",
        maxLength: 3
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


// TODO: Create a function to initialize app
function init() {
    // First inquirer will make the questions needed to create the logo
inquirer.prompt(questions).then(({text, shape, backgorund, textColor}) => {
    // depending on the shape selected it creates a new instance of the chosen shape
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

    // creating a new isntance of logo that will receive th answers of the text and for the color of the text
    const svgCreate = new Logo();

    svgCreate.setText(textColor, text);
    svgCreate.setShape(shapeLogo);

    fs.writeFile(`./examples/${text}-logo.svg`, svgCreate.render(), (error) => {
        if (error) {
          console.log(error);
        }
        console.log('Generated logo.svg');
      });

  });
}


// Function call to initialize app
init();
