const Sequelize = require('sequelize');
const db = require('../../db/database');
const User = require('../user/userModel');

const Product = db.define('product', {
  sku: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  desc: {
    type: Sequelize.STRING
  },
  size: {
    type: Sequelize.STRING
  },
  price: {
    type: Sequelize.STRING
  }
});

User.hasMany(Product);

db.sync();

module.exports = Product;
