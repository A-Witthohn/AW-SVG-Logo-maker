const fs = require('fs');

function createSVGFile(content) {
  fs.writeFile('logo.svg', content, (err) => {
    if (err) throw err;
    console.log('Generated logo.svg');
  });
}

module.exports = { createSVGFile };