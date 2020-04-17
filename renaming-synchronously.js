let fs = require('fs');
//you have to pass the relative path of the file from the Current working directory.
fs.renameSync('data.txt', 'newData.txt');
console.log('file rename sucessfully');

//to check it's Synchronous nature!
console.log("this method is Synchronous");