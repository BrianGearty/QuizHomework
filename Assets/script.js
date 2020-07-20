$(document).ready(function () {
  clearInterval(intervalID);


  // SET USER SCORE
  var correct = 0;
  var incorrect = 0;
  

  // SET TIMER
  var timer = 70;
  var intervalID;
  
  
  var questionIndex = 0
  // QUESTIONS & CHOICES & ANSWER & USER ANSWER 
  var questions = [{
    question: 'How many letters are in the musical alphabet?',
    answer: "7",
    choices: ["7", "12", "6"],
    userAnswer: ""
  },
  {
    question: 'What kind of music did Miles Davis play?',
    answer: 'Jazz',
    choices: ['Rock', "Jazz", "Funk"],
    userAnswer: ""
  },
  {
    question: 'How many strings are on a guitar?',
    answer: '6',
    choices: ['4', "5", "6"],
    userAnswer: ""
  },
  {
    question: 'What instrument does Stevie Wonder play?',
    answer: 'Piano',
    choices: ['Guitar', "Piano", "Bass"],
    userAnswer: ""
  },
  {
    question: 'Who was NOT a member of the Beatles?',
    answer: 'Ravi Shankar',
    choices: ['John Lennon', "Ravi Shankar", "George Harrison"],
    userAnswer: ""
  }
  ];
// TIMER FUNCTION   
  function decTimer() {
      clearInterval(intervalID);
                                                                
      intervalID = setInterval(function () {
      timer--;
      $("#timer").html(timer);
// CHECKING IF TIME RUNS OUT TO CLEAR & RESET
        if (timer === 0) {
        clearInterval(intervalID);
          $("#quiz-form").html(" ");
          $("#timer").html('<h2>Time is up!</h2>');
          reset();                                                    
      }
    }, 1000);
  };
// DISPLAY QUESTIONS FUNCTION
  function displayQuestion() {
    $("#quiz-form").empty()
    $("#quiz-form").append(questions[questionIndex].question);
 

    questions[questionIndex].choices.forEach(function(singleAnswer){
      var choicesButton = $("<button>");
      choicesButton.text(singleAnswer);
      choicesButton.addClass("choice");
        $("#quiz-form").append(choicesButton);
       $(".choice").attr("style", "display: block", "background-color: cornflowerblue", "border-radius: 10px");

    })
  }
// DISPLAY CHOICES FUNCTION
  $(document).on('click', ".choice", function(){
    var userAnswer = $(this).text()
    var correctAnswer = questions[questionIndex].answer

  // CHECKING USER ANSWER 
    if (userAnswer == correctAnswer) {
      correct++;
      console.log(correct)
      
    } else { 
      incorrect++;
      timer = timer - 10;
      console.log(incorrect)
      
    }
    
  // CHECKING IF ALL QUESTIONS ANSWERED TO RESET
    questionIndex++
    if(questions.length === questionIndex){
      userInfo();
    } else {
      displayQuestion()
    }

  })
// START BUTTON TO INITIATE TIMER AND QUESTIONS
$("#startButton").on("click", function () {
  reset();
  decTimer();
  displayQuestion();
   
  })

// reset function should ask to prompt initials and save local storage and then start the game over
function reset() {
  clearInterval(intervalID);
  $("#quiz-form").html(" ");
  $("#timer").html(" ");
  
  }

function userInfo() {
  var userScore = correct - incorrect;
  var userName = prompt("Put your name here to see your score!")
  var userInitials = userName + "'s" + " Score: " + userScore;
  console.log(userInitials);
  $("#quiz-form").text(userInitials);
 
   
  $("#timer").html(" ");
  clearInterval(intervalID);
}
reset();






})