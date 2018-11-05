var asia = {
   1: 'a',
   2: 'b',
   3: 'c',
   4: 'd',
   5: 'e',
   6: 'f',
   7: 'g',
   8: 'h',
   9: 'i',
   0: 'j',
}
function f(numbersString){
    var numArr = numbersString.split("").sort().map(function(a){return asia[a];});
    return numArr;
}
console.log(f('213'));