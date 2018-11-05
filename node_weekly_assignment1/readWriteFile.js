const fs = require('fs');

module.exports = {
   readFile:(dir) =>{
      return (new Promise((resolve, reject) => {
         fs.readFile(dir, (err, body) => {
            if(err){
               return reject(err);
            }
            resolve(body);
         });
     }));
   },
   writeFile:(dir, data)=>{
      return (new Promise((resolve, reject) => {
         fs.writeFile(dir, data ,(err) => {
            if(err){
               return reject(err);
            }
            resolve(data);
         });
      }));
   }
   
}