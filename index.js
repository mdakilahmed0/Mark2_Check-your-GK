var readlineSync = require("readline-sync");
var score = 0;

var questions = [
  {
    question: "Whos is the current elected president of India? ",
    answer: "Droupadi Murmu"
  },
  {
    question: "Who is the finance minister of India? ",
    answer: "Nirmala"
  },
  {
    question: "Who is the founder of Boring company? ",
    answer: "Elon Musk"
  },
  {
    question: "Which state is the largest sugarcane producing state in India? ",
    answer: "Uttar Pradesh"
  },
  {
    question: "Which animal is known as the 'Ship of the Desert? ",
    answer: "Camel"
  },
  {
    question: "How many consonants are there in the English alphabet? ",
    answer: "21"
  },
  {
    question: "Name the National river of India? ",
    answer: "Ganga"
  },
  {
    question: "Which colour symbolises peace? ",
    answer: "White"
  },
  {
    question: "How many sides are there in a triangle? ",
    answer: "3"
  },
  {
    question: "Name the largest planet of our Solar System? ",
    answer: "Jupiter"
  }
];

var highScorer = [
  {
    name: "Akil",
    score: 10
  },
  {
    name: "Allen",
    score: 9
  },
  {
    name: "Julie",
    score: 6
  },
  {
    name: "Snow",
    score: 7
  }
];

function greeting() {
  var username = readlineSync.question("What is your name, Sir? ");
  console.log("\n");
  console.log("Welcome " + username + " to the quiz! ")
  console.log("\n");
}
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Wrong answer!");
    score--;
  }
  console.log("Your current score is " + score);
  console.log("----------------------")
}

function playGame() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function scoreCheck() {
  console.log("Well Done! Your score is " + score + "/10");
  console.log("Compare your score with high scorer, if your's is higher, ping me, I'll add your as high scorer, Thanks!")
  console.log("------------------------------------");
  highScorer.map(score => console.log(score.name, " : ", score.score))
}

greeting();
playGame();
scoreCheck();