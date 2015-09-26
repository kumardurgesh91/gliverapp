var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET users is logined. */
router.get('/isLogined', function(req, res, next) {
  if(req.session && req.session.user) {
  	res.send(200,1);
  } else {
  	res.send(200,0);
  }
});

module.exports = router;
