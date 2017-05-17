const express = require('express');
const productRoutes = require('./product/productRoutes');
const userRoutes = require('./user/userRoutes');
const qrRoutes = require('./qr/qrRoutes');
const router = express.Router();

router.use('/product', productRoutes);
router.use('/user', userRoutes);
router.use('/qr', qrRoutes);

module.exports = router;
