const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema({
  picture: String,
  product: String,
  price: Number,
  description: String,
  addItem: String,
  removeItem: String,
  quantity: Number,
  totalAmount: Number,
  totalCost: Number
}, {collection : 'Product'});

module.exports = mongoose.model('Product',Product);

