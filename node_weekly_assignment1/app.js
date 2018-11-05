const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const path = require('path');
const app = express();

let cache = require('./cache');
let readWriteFile = require('./readWriteFile');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload());
app.use(express.static('files'));

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/',(req,res)=>{
	//console.log(req.body);
   //console.log(req.files);
   var xxx = path.join(__dirname, 'public/files' , req.files.uploadFile.name);
   //console.log(req.files.uploadFile.data);
   cache.insert(req.files.uploadFile.name,readWriteFile.writeFile(xxx,req.files.uploadFile.data)
   .then(res.send("Upload end."))
   .catch((e)=> res.status(500).send(e.message)));
});

app.get('/files/:file', (req, res)=> {
   //console.log(req.params.file);
   //console.log(cache.get(req.params.file));
   if(cache.get(req.params.file).length == 0){
      var xxx = path.join(__dirname, 'public/files' , req.params.file);
      //console.log(xxx+'pspspspspsps');
      cache.insert(req.params.file , readWriteFile.readFile(xxx));
   }
   var result = cache.get(req.params.file);
   //console.log(result);
   result.then((body)=>{
      res.send(body);res.end();})
      .catch(()=>{
      res.send('no that file !!!!');
      res.end();});
   
   //result.then((body)=>res.send(body) );
});


app.listen(8080)