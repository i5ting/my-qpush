
var conf = {
  type  : "push",
  name  : "producter",
  ip    : "127.0.0.1",
  port  : "3002"
}


var Q = require('./index')(conf);

var a = {
    "_id" : ("55dbd8d5a41a9b1e02f581c2"),
    "xbm_id" : 10458,
    "username" : "娇娇"
}

Q.send(a); 

setInterval(function(){
  console.log('....')
  Q.send(a);
}, 1500);
//
// var Q = require('qpush')(ip, port);
// Q.receive();
