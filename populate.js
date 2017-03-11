'use strict';

//require the usage of sqlite3
const { Database } = require('sqlite3').verbose();
//save new db as a variable
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
  const customers = require('./customers.json')
  //injects data into sql table
  customers.forEach(each => {
    bangDB.run(`INSERT INTO customers VALUES (
      ${each.customerId},
      '${each.name}',
      '${each.streetAddress}',
      '${each.city}',
      '${each.state}',
      '${each.postalCode}',
      '${each.phoneNumber}')`, err => {
        errorHandle(err)
      })
  })
}
//runs the function to populate the db
// populateCust();


const populateOrdLnItems = () => {
  const orderLineItems = require('./order-line-items.json');
  orderLineItems.forEach(each => {
    bangDB.run(`INSERT INTO orderLineItems VALUES (
      ${each.orderLineItemId},
      ${each.orderId},
      ${each.productId} )`, err => {
        errorHandle(err)
      })
  })
}
// populateOrdLnItems();


const populateOrders = () => {
  const orders = require('./orders.json');
  orders.forEach(each => {
    //Note: below, the boolean value has to be put in quotes
    bangDB.run(`INSERT INTO orders VALUES (
      ${each.orderId},
      ${each.customerId},
      ${each.paymentOptId},
      '${each.paidInFull}' )`, err => {
        errorHandle(err);
      })
  })
}
// populateOrders()



const populatePaymentOpts = () => {
  const paymentOpts = require('./payment-opts.json')
  paymentOpts.forEach(each => {
    bangDB.run(`INSERT INTO paymentOpts VALUES (
      ${each.paymentOptId},
      '${each.name}',
      ${each.accountNumber}
    )`, err => {
      errorHandle(err)
      })
  })
}
// populatePaymentOpts()


const populateProducts = () => {
  const proucts = require('./products.json');
  proucts.forEach(each => {
    bangDB.run(`INSERT INTO products VALUES (
      ${each.productId},
      '${each.name}',
      '${each.price}'
    )`, err => {
      errorHandle(err)
    })
  })
}
populateProducts()
