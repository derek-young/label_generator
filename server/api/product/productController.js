// const Product = require('./productModel');

const controller = {
  getProduct: function (req, res, next) {
    console.log('get req to product');
  },
  createProduct: function (req, res, next) {
    console.log('post req to product');
  }
}

module.exports = controller;
