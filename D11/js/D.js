$("#form").submit(e => {   
   e.preventDefault();
   var serializedInputString = $('#form').serialize();
   $.ajax({
      type:'GET',
      url:`https://api.sunrise-sunset.org/json?${serializedInputString}&formatted=0`,
      dataType: "json",
      success: function(data){
        $('#result').html(`sunrise : ${Date(data['results'].sunrise)} sunset : ${Date(data['results'].sunset)} `);
        console.log(data);
          // Success handler
      },
      error: function(data){
         console.log("Error");
          // error handler
      }
  });

})