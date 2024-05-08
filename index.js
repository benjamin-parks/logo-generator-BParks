const inquirer = require("inquirer");
const fs = require("fs")
const {Shapes, Circle, Square, Triangle} = require("./lib/shapes");

const questions = [
    {
        type: "input",
        message: "Input logo text (3 character cap): ",
        name: "logoText"
    },
    {
        type: "input",
        message: "What color would you like your text to be? ",
        name: "textColor"
    },
    {
        type: "list",
        message: "What shape would you like? ",
        choices: ["Circle", "Square", "Triangle"],
        name: "shapeChoice"
    },
    {
        type: "input",
        message: "What color would you like your shape to be? ",
        name: "shapeColor"
    }
]

const shapeConstructors = {
    Circle: Circle,
    Square: Square, 
    Triangle, Triangle
}

inquirer.prompt(questions)
.then((answers) => {
    const shapeConstructor = shapeConstructors[answers.shapeChoice];
    if (shapeConstructor) {
        const shape = new shapeConstructor(answers.logoText, answers.textColor, answers.shapeColor);
        fs.writeFile("output.svg", shape.render(), (err) => {
        if (err){
            console.log(err);
        }
        else {
            console.log("SVG File written Successfully!")
        }
    });
    }
    else {
        console.log("Invalid input!")
    }
});
