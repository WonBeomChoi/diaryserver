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
      var json1 = require(`../babo/${req.body.sender}.json`);
      var json = require(`../babo/${req.body.receiver}.json`);
      var tag = true;
      console.log("있당");
      json1['data'].push(req.body);
      // console.log(json);
      if(json1.friend.length>0){
      for(var i=0; i<json1.friend.length; i++){
        console.log(i);
        console.log(json1.friend[i].id);
        if(json1.friend[i].id == req.body.receiver){
          console.log(json1.friend[i].id);
          json1.friend[i].flag = "0";
          tag = false;
          break;
        }
      }
    }
    if(tag){
      json1.friend.push(json.user[0]);
      json1.friend[json1.friend.length-1].flag = "0"
      
    }
      json1 = JSON.stringify(json1);
      
      fs.writeFile(`babo/${req.body.sender}.json`,json1, (err) => {
        if(err) throw err;
        console.log("넹");
      });
      
      tag = true;
      json['data'].push(req.body);
      console.log("111");
      if(json.friend.length>0){
        console.log("12312");
        for(var i=0; i<json.friend.length; i++){
          if(json.friend[i].id == req.body.sender){
            console.log("2222");
            json.friend[i].flag = "1";
            tag = false;
            break;
          }
        }
      }
      console.log('11');
      // console.log(json);
      if(tag){
        console.log("asfsdf");
       json.friend.push(json1.user[0]);
       console.log("safds");
       console.log(json.friend[0].id)
       json.friend[json.friend.length-1].flag = "1"
      }
      json = JSON.stringify(json);
      // console.log(json);
      fs.writeFile(`babo/${req.body.receiver}.json`,json,(err)=>{
        if(err) throw err;
      })
    }
    catch(err){
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
