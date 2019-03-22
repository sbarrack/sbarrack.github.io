$(document).ready(function(){
    $("navbar a").click(function(e){ 
        e.preventDefault();
        var url = $(this).attr('href'); //get the link you want to load data from
        $.ajax({ 
         type: 'GET',
         url: url,
         success: function(data) { 
            $("#body").html(data); 
        } 
       }); 
     });
});
