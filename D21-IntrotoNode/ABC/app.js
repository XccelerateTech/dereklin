var english = require ('./english');
var chinese = require ('./chinese');
var calRectangle = require ('./rectangle');
var ranNum = require('./randomNumber');
var getText = require('./textArray');

console.log(english());
console.log(chinese());

console.log(calRectangle.cal(10,30));
//console.log(ranNum.cal());
console.log(getText(ranNum.cal()));


