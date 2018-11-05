var text = 'abcdefghijklmnopqrstuvwxyz';

var getString = (index)=>{
   return text.substring(index, index+1);
}

module.exports = {
   getString: getString
}