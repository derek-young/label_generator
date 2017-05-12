const router = require('express').Router();
const productCtrl = require('./productController');

router.get('/', productCtrl.getProducts);
router.post('/', productCtrl.createProduct);

module.exports = router;
