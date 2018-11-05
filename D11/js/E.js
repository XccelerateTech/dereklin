$("#form").submit(e => {   
  e.preventDefault();
  var serializedInputString = $('#form').serializeArray();
  //console.log(serializedInputString);

  var SunriseAndSunsetToday =  getSunriseAndSunset( serializedInputString[0].value , serializedInputString[1].value , '2018-10-11');
  var SunriseAndSunsetYesterday =  getSunriseAndSunset( serializedInputString[0].value , serializedInputString[1].value , -1);
  var SunriseAndSunsetTomorrow =  getSunriseAndSunset( serializedInputString[0].value , serializedInputString[1].value , 1);
  var combined = $.when(SunriseAndSunsetToday, SunriseAndSunsetYesterday ,SunriseAndSunsetTomorrow);
  combined.done(function(data1,data2 ,data3){
    var time1 = new Date(data1[0].results.sunrise);
    var time2 = new Date(data2[0].results.sunrise);
    console.log( time1 );
    console.log( time2 );
    console.log( toHHMMSS((time1-time2) - 24*1000*60*60) );

  }).fail(function(error1,error2 ,error3){

    console.log("I will be run when either one of them failed");
  }).always(function(){
    //console.log("I will always run no matter what.");
  });
})
var getSunriseAndSunset = (latitude , longitude , dayDifferent) =>{
  let dateString = "";
  if (dayDifferent == 0){
    dateString = "today";
  }else if(dayDifferent == 1) {
    dateString = "tomorrow";
  }else if(dayDifferent == -1) {
    dateString = "yesterday";
  }else{
    dateString = dayDifferent;
  }
  //let dateString = { dayDifferent = 0 ? "today" : 
  //  (dayDifferent = 1 ?  "tomorrow" : 
  //  (dayDifferent = -1 ? "yesterday" : ""))
  //}
   return $.ajax({
    type:'GET',
    url:`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}&formatted=0&date=${dateString}`,
    dataType: "json",
    done: function(data){
      //dateee = { 
      //  sunrise : new Date(data['results'].sunrise) , 
      //  sunset : new Date(data['results'].sunset)
      //};
      //console.log(dateee);
      
      //$('#result').html(`sunrise : ${Date(data['results'].sunrise)} sunset : ${Date(data['results'].sunset)} `);
      //console.log(data);
      // Success handler
    },
    error: function(data){
      console.log("Error");
    }
    
  })
}

var toHHMMSS = milliseconds => {
  var seconds = milliseconds / 1000;
  var hourDisplayed = Math.floor(seconds / 3600) +"";
  var minuteDisplayed = Math.floor(seconds % 3600 / 60 ) + "";
  var secondDisplayed = (seconds % 60).toFixed(0) + "";
  return `${hourDisplayed.padStart(2,"0")}:${minuteDisplayed.padStart(2,"0")}:${secondDisplayed.padStart(2,"0")}`;
}