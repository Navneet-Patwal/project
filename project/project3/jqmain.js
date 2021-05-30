$(document).ready(function(){
  $("button").click(function(){
    $("div").fadeTo(0.7);
    $("div").animate({left : '1000px'});
    $("div").animate({top : '1000px'});
  });
});
