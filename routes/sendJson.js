var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.all('/', function(req, res, next) {
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  console.log(req.body);
  if(req.body !== {}) {
    
    // var message = JSON.stringify(req.body);
    try{
      var json = require(`../babo/${req.body.sender}.json`);
      console.log("있당");
      json['data'].push(req.body);
      // console.log(json);
      for(var i=0; i<=json.friend.length; i++){
        console.log(i);
        if(json.friend[i].id == req.body.receiver){
          console.log("1111");
          json.friend[i].flag = "0";
          break;
        }
      }
      json = JSON.stringify(json);
      
      fs.writeFile(`babo/${req.body.sender}.json`,json, (err) => {
        if(err) throw err;
        console.log("넹");
        
      });
      var json = require(`../babo/${req.body.receiver}.json`);
      json['data'].push(req.body);
      for(var i=0; i<=json.friend.length; i++){
        if(json.friend[i].id == req.body.sender){
          console.log("2222");
          json.friend[i].flag = "1";
          break;
        }
      }
      json = JSON.stringify(json);
      fs.writeFile(`babo/${req.body.receiver}.json`,json,(err)=>{
        if(err) throw err;
      })
    }
    catch{
      // var json = require(`../babo/${}`)
      // message = `{"data":[${message}]}`
      // fs.writeFile(`babo/${req.body.sender}.json`,message, (err) => {
      //   if(err) throw err;
      //   console.log("넹");
        
      // });
    }
    
    

    res.send('날아가니????');
  } else {
    console.log("없어요");
    res.send('Json 내놔');
  }

});

// router.post('/', function(req, res, next) {
//   console.log(req.params);
//   res.send('babo');
// });
module.exports = router;
