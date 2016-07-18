var controller = require('../dbController.js');
var helpers = require('./helpers.js');
module.exports = function (app, express) {
	app.post('/api/users/signin',controller.signin);
	app.post('/api/users/signup',controller.signup);
	app.get('/user/profile', controller.viewFriend);
	app.post('/user/profile', controller.addFriend);
	app.get('/user/notes',controller.viewNotes);
	app.post('/user/notes',controller.saveNote);
	app.get('/user/notes',controller.viewNotes);
	app.post('/user/notes',controller.saveNote);

	app.use(helpers.errorLogger);
	app.use(helpers.errorHandler);
};

