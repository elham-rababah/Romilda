var http = require('http');



function onRequest(request, response) {
	console.log("A user made a request" + request.url);	
	response.writeHead(200, {"context-type":"text/plain"});
	response.write("Here is me data");
	response.end();
}


http.createServer(onRequest).listen(1234);
console.log("server is now running");
