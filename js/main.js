'use strict';

// calling sqlite3 ; targeting Database obj using ES6 deconstr
// .verbose() helps debug errors
const { Database } = require('sqlite3').verbose();

// returns a new database obj and automatically opens the database : accepts a callback confirming connection
const bangDB = new Database('bangazon.sqlite', () => console.log('Connection!'));

// function to handle error
const errorHandle = (err) => {
  if (err) {
    console.log(`Msg: ${err}`);
  }
}

// creates a table schema for each table if it doesnt exist already
bangDB.run("CREATE TABLE IF NOT EXISTS customers (customerId INT, name TEXT, streetAddress TEXT, city TEXT, state TEXT, postalCode TEXT, phoneNumber TEXT)");
bangDB.run("CREATE TABLE IF NOT EXISTS orders (orderId INT, customerId INT, paymentOptId INT, paidInFull BOOLEAN)");
bangDB.run("CREATE TABLE IF NOT EXISTS products (productId INT, name TEXT, price TEXT)");
bangDB.run("CREATE TABLE IF NOT EXISTS paymentOpts (paymentOptId INT, name TEXT, accountNumber TEXT)");
bangDB.run("CREATE TABLE IF NOT EXISTS orderLineItems (orderLineItemId INT, orderId INT, productId INT)");
