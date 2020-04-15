//simple-server-in-node.js

let http = require('http');
let host = '127.0.0.1'
let port = 3000

let server = http.createServer((request, response) => {
    response.writeHead(200, {"content-Type": "text/plain"});
    console.log("server Working");
    response.end('Server Working Success');
});

server.listen(port,host, (error) => {
    if (error){
        return console.log('Error ocurred : ', error);
    }
    console.log('server is listening on '+ host + ':'+ port);
})