let readlineSync = require('readline-sync');
let chalk = require('chalk')

let name = readlineSync.question('Enter your name:\n');
let score = 0; 

let questions = [{
  question: "An easy one to start – what is the capital city of Australia?",
  option: "A. Sydney\nB. Melbourne\nC. Canberra\nD. Brisbane ",
  answer: "c"
},
{
  question: "What is the capital city of the USA?",
  option: "A. New York\nB. Washington D.C.\nC. Los Angeles\nD. San Francisco ",
  answer: "b"
},
{
  question: "What is the capital city of the UK?",
  option: "A. London\nB. Edinburgh\nC. Belfast\nD. Cardiff ",
  answer: "a"
},
{
  question: "What is the capital city of the United Arab Emirates?",
  option: "A. Dubai\nB. Abu Dhabi\nC. Sharjah\nD. Ajman ",
  answer: "c"
},
{
  question: "What is the capital city of Norway?",
  option: "A. Oslo\nB. Stockholm\nC. Helsinki\nD. Copenhagen ",
  answer: "a"
}]
function welcome(){
console.log(chalk.black.bgWhite("Hello " + name + " ! Welcome to "+ chalk.white.bgRed.bold("Guess the capital")+ " game."));

console.log("---------------------")

console.log(chalk.green.bold("Let's test your travel knowledge – how many of these world capital can you guess correctly?"))

console.log("---------------------")
}

function validateSol(question,option,answer){
  let userSolution = readlineSync.question(question+'\n'+option+chalk.bgMagenta("\nEnter option a/b/c/d\n"));
  console.log()
  if(userSolution.toUpperCase() === answer.toUpperCase()){
    score++;
    console.log(chalk.bgGreen("Correct Answer! Current Score : "+score))
  }else{
    score--;
    console.log(chalk.bgYellow("Wrong Answer! Current Score : "+score))
  }
  console.log("---------------------")
}

function play(){
  for(let i=0;i<questions.length;i++){
    let currentQuestion = questions[i];
    validateSol(currentQuestion.question, currentQuestion.option, currentQuestion.answer)
  }
}

function finalScore(){
  console.log(
		chalk.bgCyan.bold(
			'Well ' +
				name +
				', your Final Score is: ' +
				score +
				'\nThanks for playing! :D'
		))
}
welcome();
play();
finalScore();