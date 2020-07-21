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
    choices: ['Rock', "Jazz", "Punk"],
    userAnswer: ""
  },
  {
    question: 'How many strings are on a guitar?',
    answer: '6',
    choices: ['4', "5", "6"],
    userAnswer: ""
  },
  {
    question: 'What is Stevie Wonders main instrument?',
    answer: 'Piano',
    choices: ['Guitar', "Piano", "Bass"],
    userAnswer: ""
  },
  {
    question: 'Who was NOT a member of the Beatles?',
    answer: 'Ravi Shankar',
    choices: ['Ringo Starr', "Ravi Shankar", "George Harrison"],
    userAnswer: ""
  }
  ];
// TIMER FUNCTION   
  function decTimer() {
    intervalID = setInterval(function () {
      timer--;
      $("#timer").text(timer);
// CHECKING IF TIME RUNS OUT TO CLEAR & RESET
        if (timer === 0) {
        clearInterval(intervalID);
          $("#quiz-form").html(" ");
          $("#timer").html('<h2>Time is up!</h2>');
          reset();                                                    
      }
    }, 700);
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
       $(".choice").css({"display": "block", "background-color": "burlywood", "border-radius": "10px", "font-family":"Fondamento, cursive"});

    })
  }
// DISPLAY CHOICES FUNCTION
  $(document).on('click', ".choice", function(){
    var userAnswer = $(this).text()
    var correctAnswer = questions[questionIndex].answer

// CHECKING USER ANSWER 
      if (userAnswer == correctAnswer) {
        correct++;
        console.log(correct);
      } else {
        incorrect++;
        timer = timer - 10;
        console.log(incorrect);
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

// RESET FUNCTION 
  function reset() {
    clearInterval(intervalID);
    $("#quiz-form").html(" ");
    $("#timer").html(" ");
      questionIndex = 0;
      timer = 70;
      correct = 0;
      incorrect = 0;
  }
  
  
// TAKING USER'S INFO FUNCTION
function userInfo() {
  var userScore = correct + "/5";
  var userName = prompt("Type your name here to see your score!")
  var userInitials = userName + "'s" + " Score: " + userScore;
  console.log(userInitials);
  $("#quiz-form").text(userInitials);
  $("#timer").html(" ");
  clearInterval(intervalID);
}
reset();

})

