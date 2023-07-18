// index.js
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { createSVGFile } = require('./lib/svgWriter');

function promptUser() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters:',
        validate: (input) => {
          return input.length <= 3 ? true : 'Please enter up to three characters.';
        },
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (keyword or hexadecimal number):',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number):',
      },
    ])}