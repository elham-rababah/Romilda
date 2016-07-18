var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'Memories',
    charset: 'utf8',
    filename: path.join(__dirname, '../db/Memorize.sqlite')
  }
});

db.knex.schema.hasTable('Users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('Users', function (user) {
      user.string('username').primary();
      user.string('password', 255);
      user.string('email', 255);
      user.string('name', 100);
      user.string('birthday', 255);
      user.string('Gendr',255);
      user.string('imgurl',255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('Notes').then(function(exists) {
  if (!exists) {
      db.knex.schema.createTable('Notes', function (note) {
      note.increments('id').primary();;
      note.string('username', 255).references('Users.username');
      note.string('content', 255);
      note.timestamps('date').defaultTo(knex.fn.now());
      }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});
db.knex.schema.hasTable('Friends').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('Friends', function (friend) {
    friend.primary(['Firstside','Secondside']);
    friend.string('Firstside',255).references('Users.username');
    friend.string('Secondside', 255).references('Users.username');
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

module.exports = db;