
const readlineSync = require('readline-sync');

let score = 0

console.log('Welcome to the QUIZ SHOW');

function play(questions, answers) {
  let askToContinue = readlineSync.question(`What do you want to do?\n Press 'e' to exit, or Enter to continue...\n`);

    if (askToContinue === 'e') {
        console.log('..............................');
        console.log('Your final score : ' + score);
        process.exit();
    }else{
        console.log('You Selected to continue');
    }
    console.log('');
    
    let userAns = readlineSync.question(questions);

    if (userAns === answers) {
        console.log('right answer');
        score = score + 1;
    } else {
        console.log('wrong answer');
    }

    console.log('Your current score : ' + score);
    console.log('..............................');
}

let queBank = [{
    questions : 
    `Who won 2018 FIFA World Cup?
    a. France
    b. Brazil
    c. Germany
    d. Spain \n`,
    answers : 'a'
},{
    questions : 
    `Who won 2014 FIFA World Cup? 
    a. France
    b. Brazil
    c. Germany
    d. Spain \n`,
    answers : 'c'
},{
  questions : 
    `Who won 2010 FIFA World Cup? 
    a. France
    b. Brazil
    c. Germany
    d. Spain \n`,
    answers : 'd'
}]

function quiz() {
  for (let index = 0; index < queBank.length; index++) {
      const currentQuestion = queBank[index];
      play(currentQuestion.questions, currentQuestion.answers);
  }
}

function welcome() {

  var userName = readlineSync.question("What's your name?\n");

  console.log("Welcome "+ userName + " let's see if you know about Football World Cup");
}

welcome();
quiz();
console.log('Your final score : ' + score);