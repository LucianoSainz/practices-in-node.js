//writing a file Asynchronously using nodejs
let fs = require('fs');
new_data = "this data will be appended at the end of the file";
fs.appendFile('input.txt', new_data, (err) => {
    if (err)
        throw err;
    console.log('The new_content was appended successfully');
});