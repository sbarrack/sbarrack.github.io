$(document).ready(function(){
    $("navbar a").click(function(e){ 
        e.preventDefault();
        var url = $(this).attr('href');
        $.ajax({ 
         type: 'GET',
         url: url,
         success: function(data) { 
            $("#body").load(data); 
        } 
       }); 
     });
});
