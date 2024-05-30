
//all elements
$("*").show();

//tag
$("p").on("click", function(){
    $(this).fadeToggle();
});

$("button").click(function(){
    var div = $("div");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
    div.animate({marginLeft: '100px'}, "slow");
    div.animate({marginLeft: '0px'}, "slow");
    div.animate({marginTop: '100px'}, "slow");
    div.animate({marginTop: '0px'}, "slow");
    div.animate({marginLeft: '100px', marginTop: '100px'}, "slow");
    div.animate({marginLeft: '0px', marginTop: '0px'}, "slow");
}); 

//id
