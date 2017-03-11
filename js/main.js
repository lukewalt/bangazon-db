'use strict';

//calling sqlite3 ; targeting Database obj using ES6 deconstr
//.verbose() helps debug errors
const { Database } = require('sqlite3').verbose();

// returns a new database obj and automatically opens the database : accepts a callback confirming connection
const bangDB = new Database('bangazon.sqlite', () => console.log('Connection!'));
