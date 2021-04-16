let readlineSync = require('readline-sync');
let chalk = require('chalk')

let name = readlineSync.question('Enter your name:\n');

function welcome(){
console.log("Hello " + name + " ! Welcome to "+ chalk.white.bgRed.bold("Guess the capital")+ "game.");
}
function play(){
  
}
welcome();
play();