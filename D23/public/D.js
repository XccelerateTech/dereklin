var express = require('express')
var bodyParser = require('body-parser')
var app = express();

// parse application/json
app.use(bodyParser.json())

app.post('/a', function(req,res){
  const array = req.body;
  console.log(array);
  let sum = array.reduce((acc,num)=> acc+num);
  res.send(sum);
});

app.listen(8080)