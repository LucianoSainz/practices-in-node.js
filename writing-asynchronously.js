//writing a  file Asynchronously using nodejs
let fs = require('fs');
let content = "this is the content in the file";
fs.writeFile('message.txt', content, (err) => {
    if (err)
        throw err;
    console.log('It\'s saved!');
});