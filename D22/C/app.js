var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
   if(req.url === '/') {
      res.writeHead(200);
      fs.createReadStream(__dirname + '/B/index.html').pipe(res);
   }else {
      res.writeHead(404);
      res.end();
   }
}).listen(8080, '127.0.0.1');