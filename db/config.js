
var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'your_database_user',
    password: 'password',
    database: 'Memories',
    charset: 'utf8',
    filename: path.join(__dirname, '../db/Memories.sqlite')
  }
});                



db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (usersProfile) {
      users.string('username').primary();
      users.string('password', 255);
      users.string('email', 255);
      users.string('name', 100);
      users.string('birthday', 255);
      users.string('Gendr',255);
      users.string('imgurl',255);
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('messeges').then(function(exists) {
  if (!exists) {//references('authors.id')
    db.knex.schema.createTable('messeges', function (messeges) {
      messeges.increments('id').primary();;
      messeges.string('username', 255).references('users.username');
      messeges.string('content', 255);
      messeges.timestamps('date').defaultTo(knex.fn.now());
      

    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('Freinds').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('Freinds', function (Freinds) {
      /*Freinds.string('First-side',255).primary().references('users.username');
      Freinds.string('Second-side', 255).primary().references('users.username');
     */
     Freinds.primary(['Firstside','Secondside']);
     Freinds.string('Firstside',255).references('users.username');
     Freinds.string('Secondside', 255).references('users.username');
     
      
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});