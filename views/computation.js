var express = require("express");
var router = express.Router();
var num1;



/* GET users listing. */

router.get("/", function (req, res, next) {
  num1 = Math.random() * (100 - 1) + 1;
  sin = Math.sin(num1);
  abs = Math.ans(num1);
  res.send(`log of ${num1} is: ${sin} <br>
    
         abs of ${-num1} is: ${abs}`);
});
module.exports = router;