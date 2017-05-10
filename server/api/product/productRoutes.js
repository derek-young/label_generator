const router = require('express').Router();
const productCtrl = require('./productController');

router.get('/', productCtrl.getProduct);
router.post('/', productCtrl.createProduct);

module.exports = router;
