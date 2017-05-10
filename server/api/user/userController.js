'use strict';
// const User = require('./userModel');

const controller = {

  getUser: function(req, res, next) {
    console.log('get req to user');
  },

  addUser: function(req, res, next) {
    const user = req.body;
    const email = req.body.email;

    console.log('post req to user');
  }
};

module.exports = controller;
