const readlineSync = require("readline-sync");
const chalk = require('chalk');

let score = 0;

const questions = [{
    question: 'where do I live? ',
    answer: 'Patiala'},
  {
    question: 'who is my favourite super hero? ',
    answer: 'Iron Man'
  },
  {
    question: 'Where do I work? ',
    answer: 'American Express'
}];

var highScores = [
  {
    name: "Tanay",
    score: 3,
  },

  {
    name: "Akash",
    score: 2,
  },
];

function welcome(){
  var userName = readlineSync.question(chalk.cyanBright("What is your name? "));

  console.log(`Hi ${userName}, welcome to do you know Achal \n`);
}

function play(question, answer){
  var userAnswer = readlineSync.question(chalk.keyword('orange')(question));

  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green('right'));
    score += 1; 
  } else{
    console.log(chalk.red('Wrong'));
  }

  console.log(`current score ${score}`);
  console.log('----------------\n');
}

function game(){
  for(let i=0; i<questions.length; i++){
    play(questions[i].question, questions[i].answer);
  }
}

function displayScore(){
  console.log(chalk.yellowBright(`your score is ${score}`));
  let isHighScore = true;

  for(let i=0; i<highScores.length; i++){
    if(highScores.score > score){
      isHighScore = false;
    }
  }
  if(isHighScore === true){
    console.log(chalk.greenBright(`Congratulations you have made a new high score`));
  }
}



welcome();
game();
displayScore();