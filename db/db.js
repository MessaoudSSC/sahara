"use strict"

let MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
// Connection URL 
let url = 'mongodb://localhost:27017/saraha';
// Use connect method to connect to the Server 
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server");
 
  db.close();
});
connection.MongoClient()
module.exports = MongoClient