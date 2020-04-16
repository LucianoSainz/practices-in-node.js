//serve-mp3.js
let http = require('http');
let fs = require('fs');
http.createServer(function (req, res) {
    console.log("Port Number : 3000");
    //change MIME type to 'audio/mp3'
    res.writeHead(200, { 'Content-Type': 'audio/mp3' });
    fs.exists('audio.mp3', function (exists) {
        if (exists) {
            let rstream = fs.createReadStream('audio.mp3');
            rstream.pipe(res);
        } else {
            res.end("Its a 404");
        }
    });
}).listen(3000);