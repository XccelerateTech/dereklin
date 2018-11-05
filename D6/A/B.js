function reverse( input ){
    var numbers = [] ;
    numbers = input.toString().split("") ;
    numbers.sort();
    return numbers;
    
}
console.log(reverse(54321));