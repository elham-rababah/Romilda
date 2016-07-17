var http = require('http');





http.createServer(onRequest).listen(1234);
console.log("server is now running");
