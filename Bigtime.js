$.ajax({
    url:"",
    method:"GET"
})
$(document).ready(function() {

    $.getJSON("Bigtime.json",

    function(items){
        var Detals='';

        $.each(items, function (key, value) {
            Detals += '<tr>';
            Detals += '<td>' +
            value.Number + '</td>';

            Detals += '<td>' +
            value.StudentsName + '</td>';

            Detals += '<td>' +
            value.StuEmail + '</td>';

            Detals += '<td>' +
            value.MobNo + '</td>';

            
            Detals += '<td>' +
            value.joining_date.toString().replace('T', ' ') + '</td>';
          

              
            Detals += '<td>' +
            value.ending_date.toString().replace('T', ' ') + '</td>';
           
            
            Detals += '</tr>';

        });

        $('#table').append(Detals);

    });
});






//     .done(function(data){
//     var table_data ="";
//     $.each(data,function(key, value){
//         table_data += '<tr>'; 

//         table_data += '<td>' +
//         value.Number  + '</td>';

//            table_data += '<td>'+
//         value.StudentsName + '</td>';

        
//         table_data += '<td>'+
//         value.StuEmail + '</td>';

        
//         table_data += '<td>'+
//         value.MobNo + '</td>';

//         table_data += '<td>' +
//         value.joining_date.toString().replace('T', ' ') + '</td>';

//         table_data += '<td>' +
//         value.ending_date.toString().replace('T', ' ') + '</td>';

//            table_data += '<tr>';
//     });
//     $('#table').append(table_data);
// })


// } 

