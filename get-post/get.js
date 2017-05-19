// http://d.hatena.ne.jp/replication/20110307/1299451484
var app = require('express')();
var app = express.createServer(); //not use http?
//var http = require('http').Server(app);
//var io = require('socket.io')(http);

//turn OFF ejs layout
app.set('view options', {layout: false});
//receive GET request
app.get('/', function(req, res){
  console.log(req.query); //for logging
  var name = "";
  //if NAME parameter does NOT empty, show its value
  if (req.query.name) {
    name = req.query.name;
  }
  res.render('get.ejs', { locals: { name: name} });
});
app.listen(3000);
