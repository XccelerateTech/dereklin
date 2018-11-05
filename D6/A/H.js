var letterArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

function move(words){
    var arr = words.split("");
    return arr.map(function(n) {
        return letterArray[(letterArray.indexOf(n)+10)%26];;
    });
}
console.log(move('dog'));