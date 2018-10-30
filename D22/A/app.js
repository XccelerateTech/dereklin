function processArray(arr,callback){
   myArray = arr.map(callback);
}

var myArray = [4, 8, 2, 7, 5];
processArray(myArray, function(a) {
    return a * 2;
});
// [ 8, 16, 4, 14, 10 ]
console.log(myArray[0]);
var myArray = [7, 8, 9, 1, 2];
processArray(myArray, function (a) {
    return a + 5;
});
