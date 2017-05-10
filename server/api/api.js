const express = require('express');
const productRoutes = require('./product/productRoutes');
const userRoutes = require('./user/userRoutes');
const router = express.Router();

router.use('/product', productRoutes);
router.use('/user', userRoutes);

module.exports = router;
