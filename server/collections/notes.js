var db = require('../configDB');
var Note = require('../models/note');

var Notes = new db.Collection();

Notes.model = Note;

module.exports = Notes;
