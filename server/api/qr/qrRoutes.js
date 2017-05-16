const router = require('express').Router();
const qrCtrl = require('./qrController');

router.post('/', qrCtrl.create);

module.exports = router;
