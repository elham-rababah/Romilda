var http = require('http');
var requestHandler = require('./requestHandler')
var PORT=3000;
http.createServer(requestHandler.onRequest).listen(PORT);
console.log("server is now running... : "+PORT);
