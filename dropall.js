'use strict';

const { Database } = require('sqlite3').verbose();
const bangDB = new Database('bangazon.sqlite', () => console.log('DROP ALL!'));

// function to handle error
const errorHandle = (err) => {
  if (err) {
    console.log(`Msg: ${err}`);
  }
}


const dropAll = () => {
  //delete content from all the tables, then drop them
  bangDB.run(`DELETE FROM customers`)
  .run(`DELETE FROM products`)
  .run(`DELETE FROM payment-ops`)
  .run(`DELETE FROM order-line-items`)
  .run(`DELETE FROM orders`)

  .run(`DROP TABLE orders`)
  .run(`DROP TABLE products`)
  .run(`DROP TABLE payment_options`)
  .run(`DROP TABLE order-line-items`)
  .run(`DROP TABLE customers`),
  (err) => {
    errorHandle(err)
  }

}
dropAll();
