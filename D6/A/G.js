function middle(arr){
    var max = Math.max(...arr);
    var min = Math.min(...arr);
    var mid;
    for(var i=0 ; i < arr.length ; i++ ){
        if (arr[i] != max && arr[i] != min){
            mid = i;
        }
    }
    return mid ;
}

console.log(middle([2,3,1])); // 0 -> 2 at index 0 lies between 3 and 1
console.log(middle([88, 7, 55 ])); // 2 -> 55 lies between 7 and 88