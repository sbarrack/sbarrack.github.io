$(document).ready(function(){
    $("#body").load("home.html");
    $(".link").click(function(){
        $("#body").load($(this).attr("page")+".html");
    });
});
