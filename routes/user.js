var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
router.all('/', function(req, res, next) {
  console.log(req.body);
  if(req.body !== {}) {
    //아이디 검사하는 알고리즘
    //아이디 별로 구분해서 넣어줘야대... 어떠카죠...? ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
    
    try{
      var json = require(`../babo/${req.body.id}.json`);
      console.log("있징됴")
    }
    catch{
      var json = require(`../babo/default.json`);
      json['user'].push(req.body);
      json=JSON.stringify(json);
      fs.writeFile(`babo/${req.body.id}.json`,json, (err) => {
        if(err) throw err;
        console.log("넹");
        
      });
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
