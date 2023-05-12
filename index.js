const inquirer = require('inquirer');
const shape = require('./lib/shape.js');
const circle = require('./lib/circle.js');
const square = require('./lib/circle.js');
const triangle = require('./lib/circle.js');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'maxlength-input',
        name: 'letters',
        message: "Please input at least 3 Characters to put on your svg",
        maxLength: 3
    },
    {
        type: 'input',
        message: 'Please input desired text color',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'Please choose shape',
        name: 'shape',
        choices: ['circle', 'square', 'triangle']
    },
    {
        type: 'input',
        message: 'Please input desired shape color',
        name: 'shapeColor'
    }
]).then((data) => {
    // set the filename here
    const filename = `logo.svg`;
    // pick the shape from the list
    var svg;
    switch(data.shape){
        case 'circle':
            svg = new circle();
            break;
        case 'triangle':
            svg = new triangle();
            break;
        case 'square':
            svg = new square();
            break;
        default:
            svg = new shape();
            break;
    }
    // set the color of the shape to shapeColor
    svg.setColor(data.shapeColor);

    var output = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    ${svg.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.letters}</text>
  </svg>`;

    //console.log(output);     
    // write output to file
    // create new output directory if not here
    fs.mkdir('./output', { recursive: true }, (err) => {
        if (err) throw err;
    });
    // write to output folder the README.md file
    fs.writeFile(`./output/${filename}`, output, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
});

