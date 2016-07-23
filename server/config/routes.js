var controller = require('../dbController.js');
var helpers = require('./helpers.js');


module.exports = function (app, express) {
	 app.post('/api/signin', controller.signin);
	 app.post('/api/signup', controller.signup);
	 //app.get('/api/profile', controller.viewFriend);
	// app.post('/user/profile', controller.addFriend);

	 app.get('/api/notes',controller.viewNotes);
	 //app.post('/api/notes',controller.saveNote);

	//app.use('/api/notes', helpers.decode);
	 app.get('/api/notes/', helpers.decode, controller.viewNotes);
	 app.post('/api/notes/', helpers.decode, controller.saveNote);
	// app.post('/user/notes',controller.saveNote);

	// app.get('/user/notes',controller.viewNotes);
	// app.post('/user/notes',controller.saveNote);
    // app.post
	app.use(helpers.errorLogger);
	app.use(helpers.errorHandler);
};

