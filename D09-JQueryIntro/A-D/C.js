var tr = $('<tr>',{class:"row" , id:'row-4'});
var td1 = $('<td>');
td1.append('Peter')
var td2 = $('<td>');
td2.append('123456789')
var td3 = $('<td>');
td3.append('peter@gmail.com')
tr.append(td1);
tr.append(td2);
tr.append(td3);
$('#contact-list table tbody').append(tr);

var btn = $('<input>' , {type:'reset' ,value:"clear" ,class:"clear"});
//btn.append("Clear");
$('#form1').append(btn);
$('#header h1').text("dereklin's contact list application");
$('#contact-list table').css('color', 'red');