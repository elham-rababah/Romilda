var http = require('http');
var requestHandler = require('./requestHandler')
var PORT=1234;
http.createServer(requestHandler.onRequest).listen(PORT);
console.log("server is now running"+PORT);
