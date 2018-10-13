function calculator(operator , num1 , num2 ) {
   var result ;
   if(operator=="+") {
      result = num1 + num2;
   }else if(operator=="-"){
      result = num1 - num2;
   }else if(operator=="*"){
      result = num1 * num2;
   }else if(operator=="/"){
      result = num1 / num2;
   }else{
      result = 'error';
   }

   console.log(result);
   
}
function area(height , width) {
   console.log(height * width);
   var myArray = [1 , 'a' , 3 , 4];

}

calculator('+', 5, 9); // 14
calculator('-', 7, 3); // 4
calculator('*', 5, 5); // 25
calculator('/', 9, 3); // 3
area(2,3); // 6

