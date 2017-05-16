const qr = require('qr-image');


const controller = {
  create: function(req, res, next) {
    const url = req.body.url;
    const code = qr.image(url, { type: 'svg' });
    
    res.type('svg');
    code.pipe(res);
  }
};

module.exports = controller;
