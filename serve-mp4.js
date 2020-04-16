//serve-mp4.js
let http = require('http');
let fs = require('fs');
http.createServer(function (req, res) {
    console.log("Port Number : 3000");
    //change MIME type to 'audio/mp4'
    res.writeHead(200, { 'Content-Type': 'audio/mp4' });
    fs.exists('audio.mp4', function (exists) {
        if (exists) {
            let rstream = fs.createReadStream('audio.mp4');
            rstream.pipe(res);
        } else {
            res.end("Its a 404");
        }
    });
}).listen(3000);