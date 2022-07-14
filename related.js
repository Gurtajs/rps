//function playerSelection() {
//   const userchoice = prompt("Do you choose Rock, Paper or Scissors?");
//   return userchoice
//}
//playerSelection()

//function computerPlay() {
//   const options = ["Rock", "Paper", "Scissors"];
  // return options[Math.floor(Math.random()*options.length)];  
//}
//console.log(computerPlay())
const move = ["Rock", "Paper", "Scissors"]
let playerCount = 0;
let computerCount = 0;

function computerPlay() {
   return move[Math.floor(Math.random()*move.length)]
}


function playRound(playerSelection, computerSelection) {
   if ((playerSelection == "Rock" && computerSelection == "Paper")) {
      return `You lose, ${computerSelection} beat ${playerSelection}. Computer gains ${++computerCount} point`;
   } else if ((playerSelection == "Rock" && computerSelection == "Scissors")) {
      ++playerCount;
      return "You win, rock beat scissors";
   } else if ((playerSelection == "Rock" && computerSelection == "Rock")) {
      return "It's a tie";
   } else if ((playerSelection == "Paper" && computerSelection == "Rock")) {
      ++playerCount;
      return "You win, paper beat rock";
   } else if ((playerSelection == "Paper" && computerSelection == "Paper")) {
      return "It's a tie";
   } else if ((playerSelection == "Paper" && computerSelection == "Scissors")) {
      ++computerCount;
      return "You lose, scissors beat paper";
   } else if ((playerSelection == "Scissors" && computerSelection == "Rock")) {
      ++computerCount;
      return "You lose, rock beats scissors";
   } else if ((playerSelection == "Scissors" && computerSelection == "Scissors")) {
      return "It's a tie";   
   } else if ((playerSelection == "Scissors" && computerSelection == "Paper")) {
      ++playerCount;
      return "You win, scissors beat paper";    
   }
   
   }


const buttons = document.querySelectorAll('button');


buttons.forEach((button) => {
   button.addEventListener('click', () => {
   const playerSelection = button.className;
   const computerSelection = computerPlay();

   pElement.textContent = (playRound(playerSelection, computerSelection));
   container.appendChild(pElement);

   score.textContent = "Player score: " + playerCount + " Computer score: " + computerCount;
   container.appendChild(score);

   endgame();
 
})});

const container = document.querySelector('#container');
const pElement = document.createElement('p');

const score = document.createElement('p');

const winnerPl = document.createElement('p');
winnerPl.style.color = "blue";

const winnerComp = document.createElement('p');
winnerComp.style.color = "red"

const refresh = document.createElement('button');

function endgame() {
   if (playerCount == 5) {
      winnerPl.textContent = "You win the game!";
      container.appendChild(winnerPl);
      document.querySelector(".Rock").disabled = true;
      document.querySelector(".Paper").disabled = true;
      document.querySelector(".Scissors").disabled = true;
      
      refresh.textContent = "New Game";
      container.appendChild(refresh);
   }
   else if (computerCount == 5) {
      winnerComp.textContent = "You lose, computer wins!";
      container.appendChild(winnerComp);
      document.querySelector(".Rock").disabled = true;
      document.querySelector(".Paper").disabled = true;
      document.querySelector(".Scissors").disabled = true;
      refresh.textContent = "New Game";
      container.appendChild(refresh);
   }

   }

refresh.addEventListener('click', () => {
   window.location.reload();
})

