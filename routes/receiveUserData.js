var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var json = require('../babo/'+req.query.id+'.json');
  var user = JSON.stringify(json['user']);
  res.send(user);
});
module.exports = router;