const jwt = require('jsonwebtoken');
const Product = require('./productModel');
const dbconfig = require('../../db/dbconfig');

const controller = {
  getProducts: function (req, res, next) {
    const token = req.query.token;
    const payload = jwt.verify(token, dbconfig.secret);
    const userID = payload.id;

    Product.findAll({
      where: {
        userID: userID
      }
    })
    .then(function(products) {
      res.json(products);
    })
    .catch(function(err) {
      console.log(err, ' error retrieving products');
      return res.sendStatus(500);
    });
  },

  createProduct: function (req, res, next) {
    const token = req.body.token;
    const product = req.body.product;
    const payload = jwt.verify(token, dbconfig.secret);
    const userID = payload.id;

    product.userID = userID;

    Product.create(product)
    .then(function() {
      return res.status(200).send('Product successfully saved.');
    })
    .catch(function(err) {
      console.log(err, 'error creating product');
      return res.sendStatus(500);
    });
  }
}

module.exports = controller;
