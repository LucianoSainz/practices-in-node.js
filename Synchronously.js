let fs = require('fs');
let filename = 'content.txt'; //Name of the file to be read
let content = fs.readFileSync(filename);
console.log('Content : ' + content);