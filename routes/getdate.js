var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var json = require('../babo/'+req.query.id+'.json');
  console.log(json['data']);
  var txt = JSON.stringify(json['data']['date']);
  var txt = ''
  for (let i = 0; i < json['data'].length; i++) {
      txt += ','+JSON.stringify(json['data'][i]['date']).slice(1,-1);
      
  }
  res.send(txt.slice(1));
});
module.exports = router;