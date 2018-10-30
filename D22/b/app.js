var fs = require('fs');

function copy(path){
   var readable = fs.createReadStream(__dirname + path, { encoding: 'utf8', highWaterMark: 32*1024 });
   var textPath = path.split("/");
   var realpath = '/';
   for (let i =0 ;i< textPath.length-2  ;i++){
      realpath+=textPath[i];
   }
   realpath+='/textcopy.txt'
   var writeable = fs.createWriteStream(__dirname +realpath);
   readable.pipe(writeable);
}

copy('/text.txt')