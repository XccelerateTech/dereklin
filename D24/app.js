//var http = require('http'); // a node native module
//var fetch = require('fetch');
//var axios = require('axios');
var fs = require('fs');
var paths = require('path');

function listInReadDir(dir){
   return new Promise((resolve, reject) => {
      fs.readdir(dir,(err, files) => {
         if(err){
            reject(err);
         }else{
            resolve(files);
         }
      });
   })
}
function listInStat(dir){
   return new Promise((resolve, reject) => {
      fs.stat(dir,(err, files) => {
         if(err){
            reject(err);
         }else{
            resolve(files);
         }
      });
   })
}
function listAllDirectoryAndFile(dir){
   listInReadDir(dir)
   .then((files)=>{
      for (let file of files){
         var filePath = paths.join(dir, file);
         isDirectoryOrFile(filePath);
      }
   })
   .catch((error)=>{
      console.log(error);
   });
}
function isDirectoryOrFile(path){
   listInStat(path)
   .then((file) =>{
      if(file.isDirectory()){
         console.log(path+' is Directory ');
         listAllDirectoryAndFile(path);
      }else{
         console.log(path+' is file ');
      }
   })
   .catch((error)=>{
      console.log(error);
   });
}

listAllDirectoryAndFile('./files')