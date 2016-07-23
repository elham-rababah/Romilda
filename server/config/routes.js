var controller = require('../dbController.js');
var helpers = require('./helpers.js');
var session = require('express-session');

module.exports = function (app, express) {
	 app.post('/api/signin', controller.signin);
	 app.post('/api/signup', controller.signup);
	// app.get('/user/profile', controller.viewFriend);
	// app.post('/user/profile', controller.addFriend);
	//app.use('/api/notes', helpers.decode);
	 app.get('/api/notes', helpers.decode, controller.viewNotes);
	 app.post('/api/notes', helpers.decode, controller.saveNote);
	// app.post('/user/notes',controller.saveNote);
	// app.get('/user/notes',controller.viewNotes);
	// app.post('/user/notes',controller.saveNote);

	app.use(helpers.errorLogger);
	app.use(helpers.errorHandler);
};

