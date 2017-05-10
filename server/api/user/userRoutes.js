const router = require('express').Router();
const userCtrl = require('./userController');

router.get('/', userCtrl.getUser);
router.post('/', userCtrl.addUser);

module.exports = router;
