// index.js
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { createSVGFile } = require('./lib/svgWriter');

// Prompts user for their new logo
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
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (keyword or hexadecimal number):',
        validate: (input) => {
          return input.trim() !== '' ? true : 'Please enter a valid text color.';
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
        validate: (input) => {
          return input.trim() !== '' ? true : 'Please enter a valid shape color.';
        },
      },
    ])
    .then((answers) => {
      const { text, textColor, shape, shapeColor } = answers;

      let svgContent = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">`;

      // Create the shape of the user logo
      const shapeObject =
        {
          circle: new Circle(),
          triangle: new Triangle(),
          square: new Square(),
        }[shape] || (() => { throw new Error('Invalid shape'); })();

      // Set shape color
      shapeObject.setColor(shapeColor);

      svgContent += shapeObject.render();

      svgContent += `<text x="150" y="100" fill="${textColor}" text-anchor="middle">${text}</text>`;

      svgContent += '</svg>';

      createSVGFile(svgContent);
    })
}

promptUser();

