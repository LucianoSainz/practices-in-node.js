let fs = require('fs');
let filename = 'data.txt';
fs.unlinkSync(filename);
console.log('file  deleted successfully');
