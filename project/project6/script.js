//SMALL ANIMATION OF CRICLE//
$(document).ready(function(){
  $("#round").click(function(){
    for(var i = 0; i<100; i++){
     $("#round").css({"background-color":"green","border-radius":"0%"});
     $("#round").animate({left:"1250px"});
     $("#round").animate({top :"500px"});
     $("#round").animate({left:"00px"});
     $("#round").animate({top:"00px"});
     $("#round").css({"background-color":"green","border-radius":"100%"});
   }
   });
});
