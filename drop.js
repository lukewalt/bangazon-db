'use strict';


const { Database } = require('sqlite3').verbose();
const bangDB = new Database('bangazon.sqlite', () => console.log('Drop Table'))


const dropTable = (table) => {
  bangDB.run(`DROP TABLE ${table}`)
}
