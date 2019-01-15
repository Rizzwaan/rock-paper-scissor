// initializing the scores of computer and user
let userScore = 0;
let computerScore = 0;

// Selection the user score
const userScore_span = document.querySelector('#user-score');

// Selection the computr score
const computerScore_span = document.querySelector('#computer-score');
// selecting scoreboard
const scoreBoard_div = document.querySelector('.score-board');

// selection result div
const result_div_p = document.querySelector('.result > p');

// Selection the rock paper scissor
const rock_div = document.getElementById("r");
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
// computers choice

function getComputerChoice() {
   const choices = ['r', 'p', 's'];
   const randomNumber = Math.floor(Math.random() * 3);
   return choices[randomNumber] ;
}
 

// Function game 
function convertToWord(letter){
  if(letter === 'r')return 'Rock';
  if( letter === 'p') return 'Paper';
  return 'Scissor'; 
}
function checkWinOrLoose(userScore,computerScore){
  if( (userScore == 10) && (computerScore < 10)){
    result_div_p.innerHTML = 'You Win Play Again..'
    userScore_span.innerHTML = '0';
    computerScore_span.innerHTML = '0';
  }else if((userScore < 10 )&& (computerScore == 10)){
     result_div_p.innerHTML = 'Computer Wins play Again';
     userScore_span.innerHTML = '0';
     computerScore_span.innerHTML = '0';
  }else if((userScore == 10 )&& (computerScore == 10)){
    result_div_p.innerHTML = 'Thats A tie Play Again';
    userScore_span.innerHTML = '0';
     computerScore_span.innerHTML = '0';
  }
}

function win(userChoice, computerChoice){ 

  checkWinOrLoose(userChoice,computerChoice);
  console.log(typeof userScore)
  userScore++
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  
  result_div_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} Beats ${convertToWord(computerChoice)} ${smallCompWord} You Win!!! woooh`;

   userChoice_div.classList.add('green-glow');

  setTimeout(function(){
     userChoice_div.classList.remove('green-glow')
  },300);
 }
function loose(userChoice, computerChoice){
  checkWinOrLoose(userChoice,computerChoice);
  computerScore++
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_div_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} Looses to ${convertToWord(computerChoice)} ${smallCompWord} You Lost!!! Shittt..`

  userChoice_div.classList.add('red-glow');

  setTimeout(()=> userChoice_div.classList.remove('red-glow'),300)
}
function tie(userChoice, computerChoice){
  checkWinOrLoose(userChoice,computerChoice);
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_div_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals  ${convertToWord(computerChoice)} ${smallCompWord} Thats A Tie.!`;

  userChoice_div.classList.add('blue-glow');

  setTimeout(()=>userChoice_div.classList.remove('blue-glow'),300)
  
}
function game(userChoice){
   const computerChoice = getComputerChoice();
   switch(userChoice + computerChoice){
     case 'pr':
     case 'sp':
     case 'rs':
         win(userChoice, computerChoice);
       break;
     case 'rp':
     case 'ps':
     case 'sr':
        loose( userChoice, computerChoice);
       break;
     case 'rr':
     case 'pp':
     case 'ss':
         tie(userChoice, computerChoice);
       break;
   }
}

// Adding Even tlistner to all rock paper scissor

// Defined main funcion
function main(){
  rock_div.addEventListener('click', function() {
    game("r");
  });
  
  paper_div.addEventListener('click',function(){
    game("p");
  })
  
  scissor_div.addEventListener('click',function(){
    game("s");
  })  
}

main(); // Calling main
