var express = require('express');
var router = express.Router();
var hk = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  hk++;
  res.send('User accesses are: '+hk);
});

module.exports = router;
