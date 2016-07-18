var express= require('express');
var app=express();

require('./config/middleware.js')(app,express);
require('./config/routes.js')(app,express);

app.listen(8000);
console.log("server now is listning");
module.exports=app;