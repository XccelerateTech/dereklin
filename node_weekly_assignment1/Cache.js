var cache = {};
module.exports = {
   insert:(key ,value)=>{
      cache[key] = value;
   },
   get:(key)=>{
      if (cache[key] === undefined){
         //console.log('cache[key] === undefined');
         cache[key] = [];
      }
      return cache[key];
   }
};

