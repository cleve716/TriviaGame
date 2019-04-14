
$( document ).ready(function(){



var timeLeft = 7; // countdown start time
var timerId = setInterval(countdown, 1000); // derementing one sec at a time
var numRight = 0; // correct answer array
var messages = ["Wow! Were you born in Cleveland?", // array for messages called based upon
'Meh, you did "OK"', // answers correct
"Yikes! I'm sending you a ticket to Cleveland!"];
var analysis; // calls the message  based on the index stated


$("#countdown").text("seconds remaining: " + timeLeft) // puts the countdown function on the page

function countdown() {
    if (timeLeft < 4) {
        $("#countdown").css("color", "red"); // at 3 sec numbers change from green to red
        
        } 

    if (timeLeft == -1) {
        clearTimeout(timerId);
        noTimeLeft();
        }          
        
    else {
        $("#countdown").text("seconds remaining: " + timeLeft)
        timeLeft--;
    }
}
function noTimeLeft() {
    $("#buttonSub").attr("disabled", true);
    alert("We'll accept any answers before time ran out");
    checkAnswers();
    $('input[type=radio]').prop('checked',false);
}

function reset() {
    $("#countdown").css("color", "limegreen");
    timeLeft = 7;
    timerId = setInterval(countdown, 1000);
    numRight = 0;
  
    $("#buttonSub").attr("disabled", false);
    $("#at-submit").css("visibility", "hidden");
    $('input[type=radio]').prop('checked',false);
  
}
function checkAnswers(){ 
    var question1 = document.quiz.q1.value;
    var question2 = document.quiz.q2.value;
    var question3 = document.quiz.q3.value;
    if(question1=="Cuy"){
        numRight++;
    }
    if(question2=="54"){
        numRight++;
    }

    if(question3=="green"){
        numRight++;
    }

    if (numRight < 1){
        analysis = 2;
    }

    if (numRight > 0 && numRight < 3 ){
        analysis = 1;
    }     

    if (numRight > 2){
        analysis = 0;
    }     


  
  $("#at-submit").css("visibility", "visible");
  $("#amount-correct").text("You got " + numRight + " right.");
  $("#message").text(messages[analysis])
 }



$("#buttonSub").on("click", function(){
        checkAnswers();
        clearTimeout(timerId);
        $("#buttonSub").attr("disabled", true);
})
$("#buttonReset").on("click", function(){
        reset();
   
})
 
});
