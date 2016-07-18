var express = require('express');
//var auth = require('../client/app/auth/auth');
// var friend = require('../client/app/friend/friend');
// var notes = require('../client/app/notes/notes');
// var search = require('../client/app/search/search');
// var services = require('../client/app/services/services');

//var app = express()
function onRequest(request, response) {
	console.log("A user made a request : " + request.url);	
	response.writeHead(200, {"context-type":"text/plain"});
	response.write("Here is me data");
	response.end();
}

