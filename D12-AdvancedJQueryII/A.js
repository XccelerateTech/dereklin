var rows = [] ;
var truns = 1 ;
var whosTurn = 0;
//var elementsInTicTacToe = $( `#TicTacToeDIV .row:nth-child(${i+1})` ).children();
var initInArray = () => {
   for (let i = 0 ; i < $("#TicTacToeDIV").children().length  ; i++){
      //let elementsInTicTacToe = $( `#TicTacToeDIV .row:nth-child(${i})` ).children();
      let elementsInTicTacToe = $( `#TicTacToeDIV .row:nth-child(${i+1})` ).children();
      let row = [];
      for (let s = 0 ; s < elementsInTicTacToe.length  ; s++){
         $(elementsInTicTacToe[s]).children().attr("class", (i+1)+''+(s+1));
         $(elementsInTicTacToe[s]).children().attr("src", "https://cms.xccelerateglobal.com/favicon.ico");
         $(elementsInTicTacToe[s]).children().click(()=>{
            //alert(i+" "+s);
            click( i,s);
         });
         //$(elementsInTicTacToe[s]).children().addClass("avds");
         //elementsInTicTacToe[s].attr('class' , i+''+s);
         row.push( {obtain : null} );
         //alert(row.length);
      }
      rows.push(row);
   }

}
var click = (i , s) => {
   if (rows[i][s].obtain == null){
      $( `#TicTacToeDIV .row:nth-child(${i+1}) img` ).attr("src", "https://cms.xccelerateglobal.com/favicon.ico");
      rows[i][s].obtain = whosTurn;
      whosTurn = (whosTurn == 1 ? 0 : 1);
      truns +=1;
   }
   checkGameOver();
}

var checkSame = (checkingArray) =>{
   var vir = checkingArray[0];
   var same = false;
   for (var g = 0 ;g < checkingArray.length ; g++){
      for (var h = 0 ;h < checkingArray[g].length ; h++){
         if (rows[checkingArray[g]].obtain === o){
            win = false;
            winWay.obtain = o;
            break;
         }else{
            win = true;
         }
      }

   }
   return(win);

}

var checkGameOver = () => {
   var checkingArray = [ [ 1 , 2 , 3 ] ,
   [ 4 , 5 , 6 ] ,
   [ 7 , 8 , 9 ] , 
   [ 1 , 4 , 7 ] ,
   [ 2 , 5 , 8 ] ,
   [ 3 , 6 , 9 ] ,
   [ 1 , 5 , 9 ] ,
   [ 3 , 5 , 7 ] ,
   ] ;
   alert(checkSame(checkingArray[0]));

   /*
   if ((rows[0][0].obtain == rows[0][1].obtain == rows[0][2].obtain) ||
   (rows[1][0].obtain == rows[1][1].obtain == rows[1][2].obtain) ||
   (rows[2][0].obtain == rows[2][1].obtain == rows[2][2].obtain) ||
   (rows[0][0].obtain == rows[1][0].obtain == rows[2][0].obtain) ||
   (rows[0][1].obtain == rows[1][1].obtain == rows[2][1].obtain) ||
   (rows[0][2].obtain == rows[1][2].obtain == rows[2][2].obtain) ||
   (rows[0][0].obtain == rows[1][1].obtain == rows[2][2].obtain) ||
   (rows[0][2].obtain == rows[1][1].obtain == rows[0][0].obtain) 
   ){
      alert('someone win');
   }
   */

}


$(document).ready(() =>{
   initInArray();
})