
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started=true;
$(document).keydown(function(){

  if(started===true){
    nextSequence();
    started=false
  }
  else{;
  }

});
function nextSequence(){
  userClickedPattern = [];
  level++;
  $("h1").text("level "+ level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}
function playSound(name) {
  var audio = new Audio( name + ".mp3");
  audio.play();
}

$(".btn").click(function(){
  userChosenColour=$(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);

  checkAnswer(userClickedPattern.length-1);

})
function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");

      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    } else {

      console.log("wrong");

      playSound("wrong");

      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      $("#level-title").text("Game Over, Press Any Key to Restart");

      //2. Call startOver() if the user gets the sequence wrong.
      startOver();
    }

}

// if(gamePattern===userClickedPattern){
//   nextSequence();
// }
// else(
//   $("h1").text("wrong pattern.Game over");
//
// )

function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){
         $("#"+currentColour).removeClass("pressed");

 }, 100);
}
function startOver() {

  //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = true;
}
