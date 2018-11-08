var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  try{
    var json = require('../babo/'+req.query.receiver+'.json');
  var txt = req.query.receiver+'유저가 있당';
  res.send(txt);
  }
  catch(err){
      res.send('그런사람 없습니다.');
  }
});
module.exports = router;