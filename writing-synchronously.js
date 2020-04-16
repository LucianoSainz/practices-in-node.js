let fs = require('fs');
let content = "We are writting this file asynchronously using node.js";

fs.writeFileSync('content.txt', content);
console.log("File written Successfully");