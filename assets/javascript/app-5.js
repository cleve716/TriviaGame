
$( document ).ready(function(){



var timeLeft = 7; // countdown start time
var timerId = setInterval(countdown, 1000); // de-crementing one sec at a time
var numRight = 0; // correct answer array
var messages = ["Wow! Were you born in Cleveland?", // array for messages called based upon
'Meh, you did "OK"', // answers correct
"Yikes! I'm sending you a ticket to Cleveland!"];
var analysis; // calls the message based on the index stated


$("#countdown").text("seconds remaining: " + timeLeft) // puts the countdown function on the page

function countdown() {
    if (timeLeft < 4) {
        $("#countdown").css("color", "red"); // at 3 sec numbers change from green to red
        
        } 

    if (timeLeft == -1) {   //runs the noTimeleft function at zero
        clearTimeout(timerId);
        noTimeLeft();
        }          
        
    else {
        $("#countdown").text("seconds remaining: " + timeLeft)  //countdown if not at zero
        timeLeft--;
    }
}
function noTimeLeft() {
    $("#buttonSub").attr("disabled", true);// disables submit button when time runs out
    alert("We'll accept any answers before time ran out");
    checkAnswers(); //checks any answers selected prior to timeout
    $('input[type=radio]').prop('checked',false); // clears radio button selection
}

function reset() {
    $("#countdown").css("color", "limegreen"); // color back to green
    timeLeft = 7; //time back to 7 seconds
    timerId = setInterval(countdown, 1000); //1 sec increments
    numRight = 0; // resets number correct
  
    $("#buttonSub").attr("disabled", false); //re-enables submit button
    $("#at-submit").css("visibility", "hidden"); // hides at-submit values
    $('input[type=radio]').prop('checked',false); // see above
  
}
function checkAnswers(){ 
    var question1 = document.quiz.q1.value; //captures question selection
    var question2 = document.quiz.q2.value;
    var question3 = document.quiz.q3.value;
    if(question1=="Cuy"){ // compares to answer, if correct, adds to the array
        numRight++;
    }
    if(question2=="54"){
        numRight++;
    }

    if(question3=="green"){
        numRight++;
    }

    if (numRight < 1){ //determines messages array index selection with analysis variable
        analysis = 2;
    }

    if (numRight > 0 && numRight < 3 ){
        analysis = 1;
    }     

    if (numRight > 2){
        analysis = 0;
    }     


  
  $("#at-submit").css("visibility", "visible"); // number correct data becomes visible
  $("#amount-correct").text("You got " + numRight + " right."); // text adds number correct
  $("#message").text(messages[analysis]) // analysis variable is either 0, 1, or 2, selects index value from messages variable
 }



$("#buttonSub").on("click", function(){ // on submit, checks answers, resets timer, disables submit button
        checkAnswers();
        clearTimeout(timerId);
        $("#buttonSub").attr("disabled", true);
})
$("#buttonReset").on("click", function(){
        reset(); // runs reset
   
})
 
});
