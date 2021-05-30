//retitrement function
function retirementYear(){

  //question 1 how old are you
  var age = document.getElementById('Age').value;
  //question 2 how old do you want to be when you retire?

  var retirementage = document.getElementById('retirementAge').value;

  //if equal or less than 100
  if(age <= 100){
var retirement = parseFloat(retirementAge + age);
  }

  //if equal or less than 100
   if(retirementAge <= 100){
   var result1 = new Date().getFullYear() + retirement;
   }



   //show the results
   document.getElementById('finalScoreText').innerHTML = "your are " + age +" years old. ";
   document.getElementById('retire').innerHTML = "you want to be " + retirementage + " years old when you retire";
   document.getElementById('result').innerHTML = "In " + result1 + " you can retire.";

}


//display
$(document).ready(function(){
  $(".btn2").click(function(){
    $(".test").show();
  });
});
