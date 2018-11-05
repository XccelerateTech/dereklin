$(document).ready(function(){
   $("#form1").submit(e => {
      
      e.preventDefault();
      //e.target.name.css("border-color" , "red");
      if (e.target.name.value.length > 49){
         alert("name length too large");
         //e.target.name.css("border-color" , "red");
      }else if (e.target.phone.value.length > 16 || e.target.phone.value.length < 6 || isNaN(e.target.phone.value) ){
         alert("phone length need to between 6 and 16");
         //e.target.phone.css("border-color" , "red");
      }else{
         //$("#form1").submit();

         var row = $('<tr>',{class:"row"});
         var td = $(`
            <td>${e.target.name.value}</td>
            <td>${e.target.phone.value}</td>
            <td>${e.target.email.value}</td>
            `);
         row.append(td);


         if(e.target.id === 'create-form') { 
            $(row).attr("id",'row-' + $('#contact-list table tr').length);
            $('#contact-list table tbody').append(row); 
            $(this).find('.clear').click(); 
         } else {
            $(row).attr("id",$(this).prop('row-id'));
            // if you want to update a contact, find the relevant row and replace that row with updated information. 
            $('#'+$(this).prop('row-id')).replaceWith(row);
            // logic above pushes the information created in row over the attribute that was previously selected
         }
         alert(`Name is ${e.target.name.value},Phone is ${e.target.phone.value},Email is ${e.target.email.value}`);


         
         
         
      }


/*       var tr = $('<tr>',{class:"row" , id: ('row-' + ($('#contact-list table tr').length )) });
      var td1 = $('<td>');
      td1.append('Peter')
      var td2 = $('<td>');
      td2.append('123456789')
      var td3 = $('<td>');
      td3.append('peter@gmail.com')
      tr.append(td1);
      tr.append(td2);
      tr.append(td3);
      $('#contact-list table tbody').append(tr); */
   });

   $('#row-name input').change( e => { 
      if (e.target.value.length > 49){
         $(e.target).css("border-color" , "red");
      }else{
         $(e.target).css('border-color',"");
      };
    }
   );
   $('#row-phone input').change( e => { 
      if (e.target.value.length > 16 || e.target.value.length < 6){
         $(e.target).css("border-color" , "red");
      }else{
         $(e.target).css('border-color',"");
      };
    }
   );

   $('#contact-list').on('click','.row',e => { 
      var rowElements = $(this).children(); 
      var updateFormElements = $('#update-form input').slice(0,rowElements.length); 
      for(var i =0; i < rowElements.length; i++) {
          $(updateFormElements[i]).val($(rowElements[i]).html()); 
      }
      $('#update-form').prop('row-id',$(this).attr('id'));
  });
  

  


   //$('.clear').on("click", () => alert('aass'));

});