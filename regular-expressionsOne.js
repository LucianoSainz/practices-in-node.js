let fs = require('fs');
let filename = 'data.txt';
let str = fs.readFileSync(filename).toString();
let pattern = /man/gim;
let myarray = str.match(pattern);
let len = myarray.length;
console.log("Occurrences of pattern in the strig is : " + len);