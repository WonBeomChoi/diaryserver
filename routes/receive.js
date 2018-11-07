var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  var json = require('../babo/'+req.query.id+'.json');
  console.log('asf');
  var txt = json['data'].filter(function(item){
    return item.sender==req.query.id&&item.receiver==req.query.receiver
          ||item.sender==req.query.receiver&&item.receiver==req.query.id;
  })
  
  res.send(txt);
});
module.exports = router;