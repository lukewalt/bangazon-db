'use strict';

const { Database } = require('sqlite3').verbose();
const bangDB = new Database('bangazon.sqlite', () => console.log('Connection!'));

// function to handle error
const errorHandle = (err) => {
  if (err) {
    console.log(`Msg: ${err}`);
  }
}

//requests data from customer json file and populates sql db with the values
const populateCust = () => {
  //ES6 deconstr: calls local json and saves data as variable
  const { customers } = require('./customers.json')
  //injects data into sql table
  cust.forEach(each => {
    bangDB.run(`INSERT INTO customers VALUES (
      ${each.customerId},
      '${each.name}',
      '${each.streetAddress}',
      '${each.city}',
      '${each.state}',
      '${each.postalCode}',
      '${each.phoneNumber}')`)
  })
}
populateCust();
