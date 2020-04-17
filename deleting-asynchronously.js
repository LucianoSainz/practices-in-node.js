let fs = require('fs');
let filename = 'content.txt';
fs.unlink(filename, (err) => {
    if (err)
        throw err;

    console.log('file deleted successfully');
});