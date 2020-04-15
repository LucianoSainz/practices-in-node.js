//serve-string.js

let http = require('http');
let host = '127.0.0.1'
let port = 3000

let server = http.createServer((request, response) => {
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("working with node.js");
response.end();    
});

server.listen(port,host, (error) => {
    if(error) {
        return console.log('Error ocurred : ', error);
    }
    console.log('server is listening on '+ host + ':'+ port);
});