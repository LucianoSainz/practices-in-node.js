//file append operation in nodejs
let fs = require('fs');
let content = "We are appending this file synchronously using node.js";
fs.appendFileSync('input.txt', content);
console.log("File appended Successfully");