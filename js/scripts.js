$(document).ready(function() {
    $("#projects-tabs > a > div").click(function(){
        $("#projects-tabs > a > div").each(function(){
            $(this).removeClass("active");
        });
        $(this).addClass("active"); 
    });

    $(".design").hide()
    $("#dev-tab").click(function() {
    	$(".design").fadeOut()
    	$(".dev").fadeIn();
    });
    $("#design-tab").click(function() {
    	$(".dev").fadeOut()
    	$(".design").fadeIn()
    });
});