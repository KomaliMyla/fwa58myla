var express = require('express');
var router = express.Router();
var hk = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(hk= 1,'User accesses are: '+hk);
});

module.exports = router;
