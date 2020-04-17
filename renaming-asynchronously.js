let fs = require('fs');
//you have to pass the relative path of te file from the Current working directory.
fs.rename('data.txt', 'new_data.txt', (err) => {
    if (err)
        throw err;
    console.log('file renamed successfully');
});

//to check it's Asynchronous nature!
console.log("this method is Asynchronous");